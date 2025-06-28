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
      <div className={css.featuresBlock}>
        <div className={css.equipmentsContainer}>
          <CardEquipments camper={camper} />
        </div>
        <div>
          <h3 className={css.title}>Vehicle details</h3>
          <ul className={css.vehicleList}>
            <li className={css.vehicleItem}>
              <p>Form</p>
              <p>{camper.form}</p>
            </li>
            <li className={css.vehicleItem}>
              <p>Length</p>
              <p>{camper.length}</p>
            </li>
            <li className={css.vehicleItem}>
              <p>Width</p>
              <p>{camper.width}</p>
            </li>
            <li className={css.vehicleItem}>
              <p>Height</p>
              <p>{camper.height}</p>
            </li>
            <li className={css.vehicleItem}>
              <p>Tank</p>
              <p>{camper.tank}</p>
            </li>
            <li className={css.vehicleItem}>
              <p>Consumption</p>
              <p>{camper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <BookingForm />
    </section>
  );
};

export default CamperFeatures;
