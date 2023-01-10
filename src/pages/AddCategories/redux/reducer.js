import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "./type";

const initialState = {
  allUser: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
  
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        allUser: action.data,
      };

    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
