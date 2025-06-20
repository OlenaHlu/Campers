import css from "./CamperFeatures.module.css";
import BookingForm from "../BookingForm/BookingForm";
import CardEquipments from "../../../Catalog/CardEquipments/CardEquipments";
import { selectCamper } from "../../../../redux/camper/selectors";
import { useAppSelector } from "../../../../redux/hooks";

const CamperFeatures = () => {
  const camper = useAppSelector(selectCamper);

  if (!camper) {
    // додати лоадер пізніше
    return <div>Loading camper details...</div>;
  }
  return (
    <section className={css.featuresContainer}>
      <div>
        <div>
          <CardEquipments camper={camper} />
        </div>
        <h3>Vehicle details</h3>
        <ul>
          <li>
            <p>Form</p>
            <p>{camper.form}</p>
          </li>
          <li>
            <p>Length</p>
            <p>{camper.length}</p>
          </li>
          <li>
            <p>Width</p>
            <p>{camper.width}</p>
          </li>
          <li>
            <p>Height</p>
            <p>{camper.height}</p>
          </li>
          <li>
            <p>Tank</p>
            <p>{camper.tank}</p>
          </li>
          <li>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </li>
        </ul>
      </div>
      <BookingForm />
    </section>
  );
};

export default CamperFeatures;
