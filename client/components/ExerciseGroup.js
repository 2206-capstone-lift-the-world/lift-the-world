import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchExerciseCategory } from '../store/exercises';

export default function ExerciseGroup() {
  let { category } = useParams();
  const dispatch = useDispatch();

  const group = useSelector((state) => state.allExercises);

  useEffect(() => {
    dispatch(fetchExerciseCategory(category))
  }, [dispatch, category])

  return (
    <div>
      {group ? (
        <div>
          <ul>
            {group.map((exercise) => {
              return (
                <li key={exercise.id}>{exercise.name}</li>
              )
            })}
          </ul>
        </div>
      ) : (
        <p>No exercises</p>
      )}
    </div>
  )
}