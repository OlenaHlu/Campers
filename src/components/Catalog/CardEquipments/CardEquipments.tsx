import css from "./CardEquipments.module.css";
import { Camper } from "../../../redux/types";
import Icon from "../../common/Icon";

type CardEquipmentsProps = {
  camper: Camper;
};

const CardEquipments = ({ camper }: CardEquipmentsProps) => {
  return (
    <div className={css.equipmentsContainer}>
      {camper.transmission && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="diagram" />
          <span className={css.text}>
            {camper.transmission.charAt(0).toUpperCase() +
              camper.transmission.slice(1)}
          </span>
        </div>
      )}
      {camper.engine && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="fuel-pump" />
          <span className={css.text}>
            {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
          </span>
        </div>
      )}
      {camper.AC && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="wind" />
          <span className={css.text}>AC</span>
        </div>
      )}
      {camper.kitchen && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="cup-hot" />
          <span className={css.text}>Kitchen</span>
        </div>
      )}
      {camper.radio && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="radio" />
          <span className={css.text}>Radio</span>
        </div>
      )}
      {camper.bathroom && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="shower" />
          <span className={css.text}>Bathroom</span>
        </div>
      )}
      {camper.refrigerator && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="fridge" />
          <span className={css.text}>Refrigerator</span>
        </div>
      )}
      {camper.microwave && (
        <div className={css.iconItem}>
          <Icon
            className={`${css.icon} ${css.iconChange}`}
            iconName="microwave"
          />
          <span className={css.text}>Microwave</span>
        </div>
      )}
      {camper.gas && (
        <div className={css.iconItem}>
          <Icon
            className={`${css.icon} ${css.iconChange}`}
            iconName="gas-stove"
          />
          <span className={css.text}>Gas</span>
        </div>
      )}
      {camper.water && (
        <div className={css.iconItem}>
          <Icon className={`${css.icon} ${css.iconChange}`} iconName="water" />
          <span className={css.text}>Water</span>
        </div>
      )}
      {camper.TV && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="tv" />
          <span className={css.text}>TV</span>
        </div>
      )}
    </div>
  );
};

export default CardEquipments;
