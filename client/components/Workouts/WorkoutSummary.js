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
      <div className="workout-summary-table">
        <p className="workout-summary-heading">Name</p>
        <p className="workout-summary-heading">Sets</p>
        <p className="workout-summary-heading">Reps</p>
        <p className="workout-summary-heading">Weight</p>
        <p className="workout-summary-heading">Total</p>
      </div>
      {allExercises.exercises.map((exercise) => {
        return (
          <div className="set-info" key={exercise.id}>
            {console.log("what is going on", allExercises.exercises)}
            <p>{exercise.name}</p>
            {exercise.workoutlist.sets.map((set, index) => {
              console.log("set inside map", set);
              console.log("set id", (set.setId += 1));
              return (
                <>
                  {console.log("set info", set.reps)}
                  <p key={index}>{(set.setId += 1)}</p>
                  <p>{set.reps}</p>
                  <p>{set.weight}</p>
                  <p>{set.reps * set.weight}</p>
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default connect(null, null)(WorkoutSummary);
