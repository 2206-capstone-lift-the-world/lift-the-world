import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercisesThunk } from "../../store/exercises";
import { addToWorkout } from "../../store/workout";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";
import { Link } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

// const notification = () => {
//   createNotification = (type) => {
//     return () => {
//       switch (type) {
//         case "info":
//           NotificationManager.info("Added exercise!");
//           break;
//       }
//     };
//   };
// };

const AllExercises = () => {
  const exercises = useSelector((state) => state.allExercises);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercisesThunk());
  }, [dispatch]);

  return (
    <div>
      {exercises ? (
        <div className="all-exercises-container">
          <h1 className="all-exercises-heading">All Exercises</h1>
          {/* <ul className="all-exercises-list">
            {exercises.map((exercise) => {
              return (
                <li key={exercise.id} className="all-exercises-list-item">
                  <Link
                    to={`/exercise/${exercise.id}`}
                    className="all-exercises-list-name"
                  >
                    {exercise.name}
                  </Link>
                  <button
                    onClick={() => {
                      dispatch(addToWorkout(exercise));
                      // notification("info");
                    }}
                    className="all-exercises-add-btn"
                  >
                    add to workout
                  </button>
                </li>
              );
            })}
          </ul> */}
          {exercises.map((exercise) => {
            return (
            <div className="exercise-container" key={exercise.id}>
              <div className="exercise-img-container">
                <img src={exercise.image} className="exercise-img"/>
              </div>
              <div className="exercise-info-container">
                <Link
                    to={`/exercise/${exercise.id}`}
                    className="exercise-name"
                  >
                    {exercise.name}
                  </Link>

                  <Link
                    to={`/musclegroups/${exercise.category}`}
                    className="exercise-category"
                  >
                    {exercise.category}
                  </Link>
              </div>
              <div className="exercise-btn-container">
                <button
                  onClick={() => {
                    dispatch(addToWorkout(exercise));
                    // notification("info");
                  }}
                  className="exercise-add-btn"
                >
                  <img src="/images/dumbbell.png" className="exercise-add-btn-img" />
                </button>
              </div>
            </div>
            )
          })}
        </div>
      ) : (
        <div>
          <p>No exercises found</p>
        </div>
      )}
    </div>
  );
};

export default AllExercises;
