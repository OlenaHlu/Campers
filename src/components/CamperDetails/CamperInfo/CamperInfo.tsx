import css from "./CamperInfo.module.css";
import { Camper } from "../../../redux/types";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { selectIsFavorite } from "../../../redux/favorites/selectors";
import { toggleFavorite } from "../../../redux/favorites/slice";
import Icon from "../../common/Icon";

type CamperInfoProps = {
  camper: Camper;
};

const CamperInfo = ({ camper }: CamperInfoProps) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector(selectIsFavorite(camper.id));

  const handleToggleFav = () => {
    dispatch(toggleFavorite(camper));
  };

  return (
    <div className={css.camperContainer}>
      <div className={css.camperInfo}>
        <div className={css.headerPart}>
          <h3 className={css.title}>{camper.name}</h3>
          <button
            className={css.heartBtn}
            type="button"
            onClick={handleToggleFav}
          >
            <Icon
              className={css.iconHeart}
              iconName={isFavorite ? "heart-red" : "heart-black"}
            />
          </button>
        </div>
        <div className={css.camperDetails}>
          <div className={css.ratingAndLocation}>
            <div className={css.ratingContainer}>
              <Icon iconName="star-full" className={css.iconStar} />
              <p className={css.ratingInfo}>
                {camper.rating}({camper.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.mapContainer}>
              <Icon iconName="map" className={css.iconMap} />
              <p className={css.mapInfo}>{camper.location}</p>
            </div>
          </div>
          <h3 className={css.price}>€{camper.price}.00</h3>
        </div>
      </div>
      <div className={css.photoContainer}>
        {camper.gallery && camper.gallery.length > 0 && (
          <ul className={css.photoList}>
            {camper.gallery.map((image, index) => (
              <li className={css.photoItem} key={index}>
                <img
                  src={image.thumb}
                  alt={`Camper ${camper.name} - ${index + 1}`}
                  className={css.photo}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className={css.camperDesc}>{camper.description}</p>
    </div>
  );
};

export default CamperInfo;
