import { actionType } from "../actions/authAction";

const initState = {
  CREATE_USER_SUCCESS: null,
  CREATE_USER_FAILURE: null,
  GET_USER_SUCCESS: null,
  GET_USER_FAILURE: null,
  GET_GAMER: null,
  GET_GAMER_ERROR: null,
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actionType.CREATE_USER_SUCCESS:
      return {
        ...state,
        CREATE_USER_SUCCESS: action.payload,
        CREATE_USER_FAILURE: null,
      };
    case actionType.CREATE_USER_ERROR:
      return {
        ...state,
        CREATE_USER_SUCCESS: null,
        CREATE_USER_FAILURE: action.payload,
      };
    case actionType.GET_USER_SUCCESS:
      return {
        ...state,
        GET_USER_SUCCESS: action.payload,
        GET_USER_FAILURE: null,
      };
    case actionType.GET_USER_ERROR:
      return {
        ...state,
        GET_USER_SUCCESS: null,
        GET_USER_FAILURE: action.payload,
      };
    case actionType.LOGOUT:
      return {
        ...state,
        GET_USER_SUCCESS: null,
        GET_USER_FAILURE: null,
      };
    case actionType.GET_GAMER:
      return {
        ...state,
        GET_GAMER: action.payload,
        GET_GAMER_ERROR: null,
      };
    case actionType.GET_GAMER_ERROR:
      return {
        ...state,
        GET_GAMER: null,
        GET_GAMER_ERROR: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
