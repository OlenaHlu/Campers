import css from "./CatalogPage.module.css";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import CatalogList from "../../components/Catalog/CatalogList/CatalogList";
import FiltersSide from "../../components/FiltersSide/FiltersSide";
import {
  selectCampers,
  selectError,
  selectIsLoading,
  selectTotalItems,
  selectCurrentPage,
} from "../../redux/camper/selectors";
import { fetchCampers } from "../../redux/camper/operation";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const campers = useAppSelector(selectCampers);
  const total = useAppSelector(selectTotalItems);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const currentPage = useAppSelector(selectCurrentPage);

  useEffect(() => {
    if (campers.length === 0 && !isLoading) {
      dispatch(fetchCampers({ page: 1, limit: 5 }));
    }
  }, [dispatch, campers.length, isLoading]);

  const handleLoadMore = () => {
    if (!isLoading && campers.length < total) {
      dispatch(fetchCampers({ page: currentPage + 1, limit: 5 }));
    }
  };

  const hasMoreCampers = campers.length < total;

  return (
    <>
      <Header />
      <main className={css.catalogContainer}>
        <FiltersSide />
        <div>
          <CatalogList campers={campers} />
          {isLoading && <p>Loading more campers...</p>}
          {error && <p>Error loading campers: {error}</p>}
          {!isLoading && !error && campers.length === 0 && (
            <p>No campers found. Try adjusting filters or refresh the page.</p>
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
