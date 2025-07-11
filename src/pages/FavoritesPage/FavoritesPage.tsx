import css from "./FavoritesPage.module.css";
import Header from "../../components/Header/Header";
import CatalogItem from "../../components/Catalog/CatalogItem/CatalogItem";
import { useAppSelector } from "../../redux/hooks";
import { selectFavoritesItems } from "../../redux/favorites/selectors";

const FavoritesPage = () => {
  const favoriteCamper = useAppSelector(selectFavoritesItems);
  return (
    <>
      <div className={css.favHeader}>
        <Header />
      </div>
      <main className={css.favContainer}>
        {favoriteCamper.length > 0 ? (
          <ul className={css.favList}>
            {favoriteCamper.map((camper) => (
              <li key={camper.id}>{<CatalogItem camper={camper} />}</li>
            ))}
          </ul>
        ) : (
          <p className={css.favText}>
            You haven't added any campers to your{" "}
            <span className={css.favSpan}>favorites</span> yet.
          </p>
        )}
      </main>
    </>
  );
};

export default FavoritesPage;
