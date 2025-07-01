import Header from "../../components/Header/Header";
import CamperInfo from "../../components/CamperDetails/CamperInfo/CamperInfo";
import CamperAddition from "../../components/CamperDetails/CamperAddition/CamperAddition";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCamperById } from "../../redux/camper/operation";
import {
  selectCamper,
  selectIsLoading,
  selectError,
} from "../../redux/camper/selectors";
import Loader from "../../components/Loader/Loader";
import css from "./CamperPage.module.css";

const CamperPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const selectedCamper = useAppSelector(selectCamper);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          zIndex: 9999,
        }}
      >
        <Loader width={200} />
      </div>
    );
  } else if (error) {
    content = <p>Error loading camper: {error}</p>;
  } else if (!selectedCamper) {
    content = <p>Camper not found or invalid ID.</p>;
  } else {
    content = (
      <div className={css.content}>
        <CamperInfo camper={selectedCamper} />
        <CamperAddition />
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          borderBottom: "1px solid var(--badges)",
        }}
      >
        <Header />
      </div>
      <main className={css.camperContainer}>{content}</main>
    </>
  );
};

export default CamperPage;
