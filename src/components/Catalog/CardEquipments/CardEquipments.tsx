import css from "./CardEquipments.module.css";
import { Camper } from "../../../redux/types";
import Icon from "../../common/Icon";

type CardEquipmentsProps = {
  camper: Camper;
};

const CardEquipments = ({ camper }: CardEquipmentsProps) => {
  return (
    <div className={css.equipmentContainer}>
      {camper.transmission && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="diagram" />
          <span>
            {camper.transmission.charAt(0).toUpperCase() +
              camper.transmission.slice(1)}
          </span>
        </div>
      )}
      {camper.engine && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="fuel-pump" />
          <span>
            {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
          </span>
        </div>
      )}
      {camper.AC && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="wind" />
          <span>AC</span>
        </div>
      )}
      {camper.kitchen && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="cup-hot" />
          <span>Kitchen</span>
        </div>
      )}
      {camper.radio && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="radio" />
          <span>Radio</span>
        </div>
      )}
      {camper.bathroom && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="shower" />
          <span>Bathroom</span>
        </div>
      )}
      {camper.refrigerator && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="fridge" />
          <span>Refrigerator</span>
        </div>
      )}
      {camper.microwave && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="microwave" />
          <span>Microwave</span>
        </div>
      )}
      {camper.gas && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="gas-stove" />
          <span>Gas</span>
        </div>
      )}
      {camper.water && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="water" />
          <span>Water</span>
        </div>
      )}
      {camper.TV && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="tv" />
          <span>TV</span>
        </div>
      )}
    </div>
  );
};

export default CardEquipments;
