import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPresetsThunk } from "../../store/workout";

const PresetWorkouts = () => {
  const dispatch = useDispatch();

  const presets = useSelector((state) => state.workout);

  useEffect(() => {
    dispatch(getPresetsThunk());
  }, []);

  return (
    <div>
      <h1>Need Help Getting Started? Choose from the Workouts Below:</h1>
      {presets.map((preset) => {
        return (
          <Link 
            key={presets.id}
            workout={preset}
            to={`/exercise/preset/${preset.id}`}
          >
            <button>
              {preset.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default PresetWorkouts;
