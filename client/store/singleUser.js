import axios from "axios";

// ACTION TYPE
const SET_SINGLE_USER = "SET_SINGLE_USER";
const SET_USER_LEVEL = "SET_USER_LEVEL";

// ACTION CREATOR
export const _setSingleUser = (user) => ({
  type: SET_SINGLE_USER,
  user,
});

export const _setUserLevel = (user) => ({
  type: SET_USER_LEVEL,
  user,
});

// THUNK
export const fetchSingleUser = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data } = await axios.get("/api/users/profile", {
          headers: {
            authorization: token,
          },
        });
        await dispatch(_setSingleUser(data));
      } else {
        console.log("Bad token");
      }
    } catch (err) {
      console.error("Can't find user!");
    }
  };
};

export const fetchUserLevel = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data } = await axios.get("/api/users/profile", {
          headers: {
            authorization: token,
          },
        });
        await dispatch(_setSingleUser(data));
      } else {
        console.log("Bad token");
      }
    } catch (err) {
      console.error("Can't find user!");
    }
  };
};

// REDUCER
const initialState = [];

export default function singleUserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_USER:
      return action.user;
    case SET_USER_LEVEL:
      return action.user;
    default:
      return state;
  }
}
