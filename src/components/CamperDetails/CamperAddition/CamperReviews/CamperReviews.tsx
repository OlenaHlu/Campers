import BookingForm from "../BookingForm/BookingForm";
import { Review } from "../../../../redux/types";
import { selectCamper } from "../../../../redux/camper/selectors";
import { useAppSelector } from "../../../../redux/hooks";

const CamperReviews = () => {
  const camper = useAppSelector(selectCamper);

  if (!camper) {
    // додати лоадер пізніше
    return <div>Loading camper details...</div>;
  }

  return (
    <section>
      <div>
        {camper.reviews && camper.reviews.length > 0 ? (
          <ul>
            {camper.reviews.map((reviews: Review, index) => (
              <li key={index}>
                <div>
                  <p>{reviews.comment}</p>
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
