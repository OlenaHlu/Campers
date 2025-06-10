import css from "./FiltersSide.module.css";
import LocationFilter from "./LocationFilter/LocationFilter";
import EquipmentFilter from "./EquipmentFilter/EquipmentFilter";
import TypeFilter from "./TypeFilter/TypeFilter";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { applyFiltersAndPaginate } from "../../redux/camper/slice";
import { selectFilters } from "../../redux/filters/selectors";
import { resetAllFilters } from "../../redux/filters/slice";

const FiltersSide = () => {
  const dispatch = useAppDispatch();
  const currentFilters = useAppSelector(selectFilters);

  const handleSearchClick = () => {
    // console.log("Search button clicked. Applying filters:", currentFilters);
    dispatch(applyFiltersAndPaginate(currentFilters));
    dispatch(resetAllFilters());
  };
  return (
    <div className={css.filtersContainer}>
      <LocationFilter />
      <EquipmentFilter />
      <TypeFilter />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default FiltersSide;
