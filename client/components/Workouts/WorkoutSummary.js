import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

const WorkoutSummary = () => {
  return (
    <div className="workout-summary-container">
      <div className="workout-summary-headings">
        <span className="workout-summary-heading">Name</span>
        <span className="workout-summary-heading">Sets</span>
        <span className="workout-summary-heading">Reps</span>
        <span className="workout-summary-heading">Weight</span>
        <span className="workout-summary-heading">️Total</span>
      </div>
    </div>
  );
};

export default connect(null, null)(WorkoutSummary);
