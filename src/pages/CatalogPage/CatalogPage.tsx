import css from "./CatalogPage.module.css";

import Header from "../../components/Header/Header";
import CatalogList from "../../components/Catalog/CatalogList/CatalogList";
import FiltersSide from "../../components/FiltersSide/FiltersSide";

const CatalogPage = () => {
  return (
    <>
      <Header />
      <main className={css.catalogContainer}>
        <FiltersSide />
        <CatalogList />
      </main>
    </>
  );
};

export default CatalogPage;
