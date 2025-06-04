import css from "./FiltersSide.module.css";
import LocationFilter from "./LocationFilter/LocationFilter";
import EquipmentFilter from "./EquipmentFilter/EquipmentFilter";
import TypeFilter from "./TypeFilter/TypeFilter";

const FiltersSide = () => {
  return (
    <div className={css.filtersContainer}>
      <LocationFilter />
      <EquipmentFilter />
      <TypeFilter />
      <button>Search</button>
    </div>
  );
};

export default FiltersSide;
