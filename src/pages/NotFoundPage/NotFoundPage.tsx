import css from "./NotFoundPage.module.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div className={css.notFoundContainer}>
      <div className={`${css.lostItem} ${css.item1}`}></div>
      <div className={`${css.lostItem} ${css.item2}`}></div>
      <div className={`${css.lostItem} ${css.item3}`}></div>
      <h1 className={css.notFoundHeading}>404</h1>
      <p className={css.notFoundMessage}>Oops! It seems you're lost.</p>
      <p className={css.notFoundSubMessage}>This page does not exist.</p>
      <button className={css.notFoundButton} onClick={handleGoHome}>
        Go Home
      </button>
      <div className={`${css.lostItem} ${css.item4}`}></div>
      <div className={`${css.lostItem} ${css.item5}`}></div>
    </div>
  );
};

export default NotFoundPage;
