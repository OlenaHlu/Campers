import css from "./FiltersSide.module.css";
import LocationFilter from "./LocationFilter/LocationFilter";
import EquipmentFilter from "./EquipmentFilter/EquipmentFilter";

const FiltersSide = () => {
  return (
    <div className={css.filtersContainer}>
      <LocationFilter />
      <EquipmentFilter />
    </div>
  );
};

export default FiltersSide;
