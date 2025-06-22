import css from "./CatalogItem.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Camper } from "../../../redux/types";
import { toggleFavorite } from "../../../redux/favorites/slice";
import { selectIsFavorite } from "../../../redux/favorites/selectors";
import { Link } from "react-router-dom";
import Icon from "../../common/Icon";
import CardEquipments from "../CardEquipments/CardEquipments";

type CatalogItemProps = {
  camper: Camper;
};

const CatalogItem = ({ camper }: CatalogItemProps) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector(selectIsFavorite(camper.id));

  const mainImage =
    camper.gallery && camper.gallery.length > 0
      ? camper.gallery[0].thumb
      : null;

  const handleToggleFav = () => {
    dispatch(toggleFavorite(camper));
  };

  return (
    <div className={css.itemContainer}>
      <div className={css.imageWrapper}>
        {mainImage ? (
          <img src={mainImage} alt={camper.name} className={css.camperImage} />
        ) : (
          <div className={css.noImage}>No Image Available</div>
        )}
      </div>
      <div className={css.infoContainer}>
        <div className={css.infoHeader}>
          <h3 className={css.title}>{camper.name}</h3>
          <div className={css.priceAndHeart}>
            <p className={css.price}>€{camper.price}.00</p>
            <button
              type="button"
              onClick={handleToggleFav}
              className={css.heartBtn}
            >
              <Icon
                iconName={isFavorite ? "heart-red" : "heart-black"}
                className={css.iconHeart}
              />
            </button>
          </div>
        </div>
        <div className={css.nextInfoContainer}>
          <div>
            <Icon className={css.iconStar} iconName="star-full" />
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <Icon className={css.iconMap} iconName="map" />
          <p>{camper.location}</p>
        </div>
        <p>{camper.description}</p>
        <div>
          <CardEquipments camper={camper} />
        </div>
        <Link to={`/catalog/${camper.id}`}>Show more</Link>
      </div>
    </div>
  );
};

export default CatalogItem;
