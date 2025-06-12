import css from "./CamperInfo.module.css";
import { Camper } from "../../../redux/types";
import Icon from "../../common/Icon";

type CamperInfoProps = {
  camper: Camper;
};

const CamperInfo = ({ camper }: CamperInfoProps) => {
  return (
    <div>
      <div>
        <h3>{camper.name}</h3>
        <div>
          <div>
            <Icon iconName="star-full" className={css.iconStar} />
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div>
            <Icon iconName="map" className={css.iconMap} />
            <p>{camper.location}</p>
          </div>
        </div>
        <h3>€{camper.price}.00</h3>
      </div>
      <div>
        {camper.gallery && camper.gallery.length > 0 && (
          <ul>
            {camper.gallery.map((image, index) => (
              <li key={index}>
                <img
                  src={image.thumb}
                  alt={`Camper ${camper.name} - ${index + 1}`}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <p>{camper.description}</p>
    </div>
  );
};

export default CamperInfo;
