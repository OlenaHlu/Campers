import Header from "../../components/Header/Header";
import CatalogItem from "../../components/Catalog/CatalogItem/CatalogItem";
import { useAppSelector } from "../../redux/hooks";
import { selectFavoritesItems } from "../../redux/favorites/selectors";

const FavoritesPage = () => {
  const favoriteCamper = useAppSelector(selectFavoritesItems);
  return (
    <>
      <Header />
      <main>
        {favoriteCamper.length > 0 ? (
          <ul>
            {favoriteCamper.map((camper) => (
              <li key={camper.id}>{<CatalogItem camper={camper} />}</li>
            ))}
          </ul>
        ) : (
          <p>You haven't added any campers to your favorites yet.</p>
        )}
      </main>
    </>
  );
};

export default FavoritesPage;
