import css from "./CamperFeatures.module.css";
import BookingForm from "../BookingForm/BookingForm";
import CardEquipments from "../../../Catalog/CardEquipments/CardEquipments";
import { selectCamper } from "../../../../redux/camper/selectors";
import { useAppSelector } from "../../../../redux/hooks";
import Loader from "../../../Loader/Loader";

const CamperFeatures = () => {
  const camper = useAppSelector(selectCamper);

  if (!camper) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          zIndex: 9999,
        }}
      >
        <Loader />
      </div>
    );
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
