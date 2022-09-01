import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchWorkoutlist } from "../../store/workoutlist";

const WorkoutSummary = () => {
  const dispatch = useDispatch();
  const workoutlist = useSelector((state) => state.workoutlist);

  useEffect(() => {
    dispatch(fetchWorkoutlist());
  }, []);

  if (
    !workoutlist.allExercises.exercises ||
    workoutlist.allExercises.exercises.length === 0
  ) {
    return <div>Loading...</div>;
  }

  const { allExercises } = workoutlist || [];
  console.log("workoutlist info", allExercises);
  return (
    <div className="workout-summary-container">
      <table className="workout-summary-table">
        <thead>
          <tr>
            <th className="workout-summary-heading">Name</th>
            <th className="workout-summary-heading">Sets</th>
            <th className="workout-summary-heading">Reps</th>
            <th className="workout-summary-heading">Weight</th>
            <th className="workout-summary-heading">Total</th>
          </tr>
        </thead>
        <tbody>
          {allExercises.exercises.map((exercise) => {
            return (
              <>
                <tr key={exercise.id}>{exercise.name}</tr>
                <tr>
                  {exercise.workoutlist.sets.map((set, index) => {
                    console.log("set inside map", set);
                    <tr key={index}>{parseInt(set.setId) + 1}</tr>;
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default connect(null, null)(WorkoutSummary);
