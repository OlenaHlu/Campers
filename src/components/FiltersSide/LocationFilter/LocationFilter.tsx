import css from "./LocationFilter.module.css";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectLocationFilter } from "../../../redux/filters/selectors";
import { setLocationFilter } from "../../../redux/filters/slice";
import Icon from "../../common/Icon";

const LocationFilter = () => {
  const dispatch = useAppDispatch();
  const location = useAppSelector(selectLocationFilter);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLocationFilter(e.target.value));
  };

  return (
    <div className={css.formContainer}>
      <label htmlFor="location" className={css.formLabel}>
        Location
      </label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={handleChange}
        placeholder="City, Country"
        className={css.input}
      />
      <Icon iconName="map" className={css.iconMap} />
    </div>
  );
};

export default LocationFilter;
