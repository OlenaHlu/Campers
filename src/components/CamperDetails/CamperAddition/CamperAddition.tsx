import css from "./CamperAddition.module.css";
import { useState } from "react";
import CamperFeatures from "./CamperFeatures/CamperFeatures";
import CamperReviews from "./CamperReviews/CamperReviews";

type ActiveTab = "features" | "reviews";

const CamperAddition = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("features");
  return (
    <div>
      <div>
        <button
          className={`${css.tabButton} ${
            activeTab === "features" ? css.active : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${css.tabButton} ${
            activeTab === "reviews" ? css.active : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div>
        {activeTab === "features" && <CamperFeatures />}
        {activeTab === "reviews" && <CamperReviews />}
      </div>
    </div>
  );
};

export default CamperAddition;
