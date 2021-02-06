import axios from "axios";

export const actionType = {
  CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  CREATE_USER_ERROR: "CREATE_USER_ERROR",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_ERROR: "GET_USER_ERROR",
  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
  UPDATE_USER_ERROR: "UPDATE_USER_ERROR",
  GET_GAMER: "GET_GAMER",
  GET_GAMER_ERROR: "GET_GAMER_ERROR",
  UPLOAD_PHOTO_SUCCESS: "UPLOAD_PROFILE_SUCCESS",
  UPLOAD_PHOTO_ERROR: "UPLOAD_PHOTO_ERROR",
  LOGOUT: "LOGOUT",
};

// https://makestories-assignment.herokuapp.com
const URL = `http://localhost:5000`;
export const signUp = (data) => async (dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${URL}/api/v1/gamer`,
      data: data,
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatch({ type: actionType.CREATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: actionType.CREATE_USER_ERROR, payload: error });
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${URL}/api/v1/gamer/singleGamer`,
      data: data,
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatch({ type: actionType.GET_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: actionType.GET_USER_ERROR, payload: error });
  }
};

export const logout = () => {
  return { type: actionType.LOGOUT };
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${URL}/api/v1/gamer/${id}`,
      data: data,
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatch({ type: actionType.UPDATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: actionType.UPDATE_USER_ERROR, payload: error });
  }
};

export const getGamer = (id) => async (dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/api/v1/gamer/${id}`,
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatch({ type: actionType.GET_GAMER, payload: response.data });
  } catch (error) {
    dispatch({ type: actionType.GET_GAMER_ERROR, payload: error });
  }
};

export const uploadProfilePhoto = (id, data) => async (dispatch) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${URL}/api/v1/gamer/${id}/uploadPhoto`,
      data: data,
    });
    dispatch({ type: actionType.UPLOAD_PHOTO_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: actionType.UPLOAD_PHOTO_ERROR, payload: error.message });
  }
};
