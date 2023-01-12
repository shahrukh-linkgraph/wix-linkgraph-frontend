import {
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
} from "./type";

const initialState = {
  category: [],
  loading: false,
  error: null,
};

export default function AddCategorYReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        category: [],
      };

    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.data,
      };

    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
