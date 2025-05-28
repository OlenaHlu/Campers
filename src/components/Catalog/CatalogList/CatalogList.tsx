import css from "./CatalogList.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogList = () => {
  return (
    <div className={css.listContainer}>
      <CatalogItem />
    </div>
  );
};

export default CatalogList;
