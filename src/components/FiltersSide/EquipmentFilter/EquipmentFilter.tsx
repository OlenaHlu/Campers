import css from "./EquipmentFilter.module.css";
import React from "react";
import Icon from "../../common/Icon";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setEquipmentFilter } from "../../../redux/filters/slice";
import { selectEquipmentFilter } from "../../../redux/filters/selectors";
import { VehicleEquipment } from "../../../redux/types";

const EquipmentFilter = () => {
  const dispatch = useAppDispatch();
  const selectedEquipment = useAppSelector(selectEquipmentFilter);

  const equipmentOptions: {
    id: VehicleEquipment;
    label: string;
    iconComponent: React.ReactNode;
  }[] = [
    {
      id: "AC",
      label: "AC",
      iconComponent: <Icon iconName="wind" className={css.icon} />,
    },
    {
      id: "automatic",
      label: "Automatic",
      iconComponent: <Icon iconName="diagram" className={css.icon} />,
    },
    {
      id: "kitchen",
      label: "Kitchen",
      iconComponent: <Icon iconName="cup-hot" className={css.icon} />,
    },
    {
      id: "TV",
      label: "TV",
      iconComponent: <Icon iconName="tv" className={css.icon} />,
    },
    {
      id: "bathroom",
      label: "Bathroom",
      iconComponent: <Icon iconName="shower" className={css.icon} />,
    },
    {
      id: "microwave",
      label: "Microwave",
      iconComponent: (
        <Icon
          iconName="microwave"
          className={`${css.icon} ${css.iconMicrowave}`}
        />
      ),
    },
  ];

  const handleToggle = (equipmentId: VehicleEquipment) => {
    dispatch(setEquipmentFilter(equipmentId));
  };

  return (
    <div className={css.equipmentContainer}>
      <h2 className={css.title}>Vehicle equipment</h2>
      <div className={css.btnsContainer}>
        {equipmentOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`${css.equipmentButton} ${
              selectedEquipment.includes(option.id) ? css.active : ""
            }`}
            onClick={() => handleToggle(option.id)}
          >
            {" "}
            {option.iconComponent}
            <span className={css.btnText}>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EquipmentFilter;
