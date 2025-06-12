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
    content = <p>Loading camper details...</p>;
  } else if (error) {
    content = <p>Error loading camper: {error}</p>;
  } else if (!selectedCamper) {
    content = <p>Camper not found or invalid ID.</p>;
  } else {
    content = (
      <div>
        <CamperInfo camper={selectedCamper} />
        <CamperAddition />
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>{content}</main>
    </>
  );
};

export default CamperPage;
