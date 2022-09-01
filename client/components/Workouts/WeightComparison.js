import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkout } from "../../store/workout";
import { weightFunction } from "./WeightFunction";

const WeightComparison = () => {
  const weightsComparison = useSelector((state) => state.workout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkout());
  }, [dispatch]);

  const exercises = weightsComparison.exercises || [];
  const totalWeightArr =
    exercises.map((exercise) => {
      return exercise.workoutlist.sets.map((set) => {
        let total = 0;
        total += set.reps * set.weight;
        return total;
      });
    }) || [];
  const totalWeight = totalWeightArr.reduce((acc, curr) => {
    return (acc += parseInt(curr));
  }, 0);
  const comparison = weightFunction(totalWeight);
  return (
    <div>
      <div className="recap-total-weight">
        <p>
          You lifted {totalWeight.toLocaleString("en-US")} pounds during this
          workout!
        </p>
        <p>That's the weight of {comparison.name}</p>
        <img className="comparison-image" src={comparison.image} />
      </div>
    </div>
  );
};

export default WeightComparison;
