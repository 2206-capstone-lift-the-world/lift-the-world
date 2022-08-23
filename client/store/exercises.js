import axios from "axios";

const GET_ALL_EXERCISES = "GET_ALL_EXERCISES";

const getAllExercises = (exercises) => ({
  type: GET_ALL_EXERCISES,
  exercises,
});

export const getExercisesThunk = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/exercise");
    dispatch(getAllExercises(data));
  } catch (error) {
    console.log(error);
  }
};

const initialState = [];

export default function exercisesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EXERCISES:
      return action.exercises;
    default:
      return state;
  }
}
