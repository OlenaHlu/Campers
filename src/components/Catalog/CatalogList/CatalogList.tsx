import css from "./CatalogList.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";
import { Camper } from "../../../redux/camper/types";

type CatalogListProps = {
  campers: Camper[];
};

const CatalogList = ({ campers }: CatalogListProps) => {
  return (
    <div className={css.listContainer}>
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>{<CatalogItem camper={camper} />}</li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;
