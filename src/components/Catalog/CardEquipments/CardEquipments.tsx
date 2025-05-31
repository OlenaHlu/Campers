import css from "./CardEquipments.module.css";
import { Camper } from "../../../redux/camper/types";
import Icon from "../../common/Icon";

type CardEquipmentsProps = {
  camper: Camper;
};

const CardEquipments = ({ camper }: CardEquipmentsProps) => {
  return (
    <div className={css.equipmentContainer}>
      {camper.transmission === "automatic" && (
        <div className={css.iconItem}>
          <Icon className={css.icon} iconName="diagram" />
          <span>Automatic</span>
        </div>
      )}
    </div>
  );
};

export default CardEquipments;
