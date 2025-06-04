import css from "./TypeFilter.module.css";
import React from "react";
import Icon from "../../common/Icon";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setVehicleTypeFilter } from "../../../redux/filters/slice";
import { selectVehicleTypeFilter } from "../../../redux/filters/selectors";
import { VehicleType } from "../../../redux/types";

const TypeFilter = () => {
  const dispatch = useAppDispatch();
  const selectedType = useAppSelector(selectVehicleTypeFilter);

  const typeOptions: {
    id: VehicleType;
    label: string;
    iconComponent: React.ReactNode;
  }[] = [
    {
      id: "panelTruck",
      label: "Van",
      iconComponent: <Icon iconName="bi_grid3" className={css.icon} />,
    },
    {
      id: "fullyIntegrated",
      label: "Fully Integrated",
      iconComponent: <Icon iconName="bi_grid4" className={css.icon} />,
    },
    {
      id: "alcove",
      label: "Alcove",
      iconComponent: <Icon iconName="bi_grid9" className={css.icon} />,
    },
  ];

  const handleChange = (typeId: VehicleType) => {
    dispatch(setVehicleTypeFilter(typeId));
  };
  return (
    <div>
      <h2>Vehicle type</h2>
      <div>
        {typeOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`${css.typeButton} ${
              selectedType === option.id ? css.active : ""
            }`}
            onClick={() => handleChange(option.id)}
          >
            {option.iconComponent}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypeFilter;
