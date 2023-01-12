import {
  LIST_CATEGORIES_REQUEST,
  LIST_CATEGORIES_SUCCESS,
  LIST_CATEGORIES_FAILURE,
} from "./type";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export default function listCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LIST_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.data,
      };

    case LIST_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
