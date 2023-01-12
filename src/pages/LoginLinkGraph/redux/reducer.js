import {
  POST_LOGIN_USER_REQUEST,
  POST_LOGIN_USER_SUCCESS,
  POST_LOGIN_USER_FAILURE,
} from "./type";

const initialState = {
  loginUser: [],
  loading: false,
  error: null,
};

export default function loginUserReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        loginUser: [],
      };

    case POST_LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loginUser: action.data,
      };

    case POST_LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
