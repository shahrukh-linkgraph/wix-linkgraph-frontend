import {
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILURE,
} from "./type";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function addRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTRATION_REQUEST:
      return {
        ...state,
        loading: true,
        data: [],
      };

    case USER_REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };

    case USER_REGISTRATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
