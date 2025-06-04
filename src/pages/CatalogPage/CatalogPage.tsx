import css from "./CatalogPage.module.css";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import CatalogList from "../../components/Catalog/CatalogList/CatalogList";
import FiltersSide from "../../components/FiltersSide/FiltersSide";
import {
  selectError,
  selectIsLoading,
  selectDisplayedCampers,
  selectTotalItems,
} from "../../redux/camper/selectors";
import { fetchCampers } from "../../redux/camper/operation";
import { loadNextPage } from "../../redux/camper/slice";
import { selectFilters } from "../../redux/filters/selectors";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const displayedCampers = useAppSelector(selectDisplayedCampers);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const totalFilteredCampers = useAppSelector(selectTotalItems);
  const currentFilters = useAppSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    if (!isLoading && displayedCampers.length < totalFilteredCampers) {
      dispatch(loadNextPage({ currentFilters }));
    }
  };

  const hasMoreCampers = displayedCampers.length < totalFilteredCampers;

  return (
    <>
      <Header />
      <main className={css.catalogContainer}>
        <FiltersSide />
        <div>
          <CatalogList campers={displayedCampers} />
          {isLoading && displayedCampers.length === 0 && (
            <p>Loading campers...</p>
          )}
          {error && <p>Error loading campers: {error}</p>}
          {!isLoading &&
            !error &&
            displayedCampers.length === 0 &&
            totalFilteredCampers === 0 && (
              <p>
                No campers found matching your criteria. Try adjusting filters.
              </p>
            )}
          {hasMoreCampers && !isLoading && (
            <button type="button" onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </div>
      </main>
    </>
  );
};

export default CatalogPage;
