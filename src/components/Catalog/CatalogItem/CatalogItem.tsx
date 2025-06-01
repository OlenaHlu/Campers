import css from "./CatalogItem.module.css";
import { Camper } from "../../../redux/camper/types";
import { Link } from "react-router-dom";
import Icon from "../../common/Icon";
import CardEquipments from "../CardEquipments/CardEquipments";

type CatalogItemProps = {
  camper: Camper;
};

const CatalogItem = ({ camper }: CatalogItemProps) => {
  const mainImage =
    camper.gallery && camper.gallery.length > 0
      ? camper.gallery[0].thumb
      : null;

  return (
    <div className={css.itemContainer}>
      <div className={css.imageWrapper}>
        {mainImage ? (
          <img src={mainImage} alt={camper.name} className={css.camperImage} />
        ) : (
          <div className={css.noImage}>No Image Available</div>
        )}
      </div>
      <div>
        <div>
          <h3>{camper.name}</h3>
          <div>
            <p>€{camper.price}.00</p>
            <button>
              <Icon iconName="heart-black" className={css.icon} />
            </button>
          </div>
        </div>
        <div>
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
      </div>
      <Link to="/catalog/:id">Show more</Link>
    </div>
  );
};

export default CatalogItem;
