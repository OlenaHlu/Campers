import css from "./HomeContent.module.css";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className={css.homeContainer}>
      <div className={css.informContent}>
        <h1 className={css.homeTitle}>Campers of your dreams</h1>
        <p className={css.homeText}>
          You can find everything you want in our catalog
        </p>
        <Link className={css.viewBtn} to="/catalog">
          View Now
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
