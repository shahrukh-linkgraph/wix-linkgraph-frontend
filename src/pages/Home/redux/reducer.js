import {
  USER_AUTO_LOGIN_REQUEST,
  USER_AUTO_LOGIN_SUCCESS,
  USER_AUTO_LOGIN_FAILURE,
} from "./type";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function userAutoLoginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_AUTO_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        data: [],
      };

    case USER_AUTO_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };

    case USER_AUTO_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
