import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPresetsThunk } from "../../store/workout";
import Loading from "../Loading";

const PresetWorkouts = () => {
  const dispatch = useDispatch();

  const presets = useSelector((state) => state.workout || []);

  useEffect(() => {
    dispatch(getPresetsThunk());
  }, [dispatch]);
  console.log("presets workouts", presets);
  if (!presets || !presets[0] || presets.length === 0) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <h1 className="presets-heading">
        Need help getting started? Choose from the workouts below:
      </h1>
      {presets.map((preset) => {
        return (
          <Link
            key={preset.id}
            workout={preset}
            to={`/workout/preset/${preset.id}`}
          >
            <button>{preset.name}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default PresetWorkouts;
