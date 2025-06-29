import css from "./CamperReviews.module.css";
import BookingForm from "../BookingForm/BookingForm";
import { Review } from "../../../../redux/types";
import { selectCamper } from "../../../../redux/camper/selectors";
import { useAppSelector } from "../../../../redux/hooks";
import RatingStars from "../../../common/RatingStars";

const CamperReviews = () => {
  const camper = useAppSelector(selectCamper);

  if (!camper) {
    // додати лоадер пізніше
    return <div>Loading camper details...</div>;
  }

  return (
    <section className={css.reviewContainer}>
      <div className={css.reviewBlock}>
        {camper.reviews && camper.reviews.length > 0 ? (
          <ul className={css.reviewList}>
            {camper.reviews.map((reviews: Review, index) => (
              <li key={index} className={css.reviewItem}>
                <div className={css.reviewerDetails}>
                  <div className={css.reviewer}>
                    <span className={css.initialContainer}>
                      {reviews.reviewer_name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className={css.starsContainer}>
                    <p>{reviews.reviewer_name}</p>
                    <RatingStars rating={reviews.reviewer_rating} />
                  </div>
                </div>
                <div className={css.commentContainer}>
                  <p className={css.comment}>{reviews.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available for this camper.</p>
        )}
      </div>
      <BookingForm />
    </section>
  );
};

export default CamperReviews;
