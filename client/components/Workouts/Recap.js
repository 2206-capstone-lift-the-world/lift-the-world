import React, { useEffect, useState } from "react";
import WeightComparison from "./WeightComparison";
import { useSelector } from "react-redux";
import { WorkoutSummary } from "./WorkoutSummary";
import ModalOnLeveling from "../ModalLeveling/ModalOnLeveling";

const Recap = () => {
  const user = useSelector((state) => state.singleUser);
  const [isLevelModalActive, setIsLevelModalActive] = useState(true);
  const [prevLevel, setPrevLevel] = useState(0);
  const [levelLoaded, setLevelLoaded] = useState(false);

  useEffect(() => {
    if (user.level > 0) {
      if (!levelLoaded) {
        setPrevLevel(user.level);
        setLevelLoaded(true);
      } else if (user.level > prevLevel) {
        setIsLevelModalActive(true);
        setPrevLevel(user.level);
      }
    }
  }, [user.level]);

  return (
    <div className="recap-container">
      <div className="recap-congrats">
        <h4>Great job with your workout!</h4>
      </div>
      <ModalOnLeveling
        isActive={isLevelModalActive}
        onClose={() => {
          setIsLevelModalActive(false);
        }}
      />
      <WorkoutSummary />
      <WeightComparison />
    </div>
  );
};

export default Recap;
