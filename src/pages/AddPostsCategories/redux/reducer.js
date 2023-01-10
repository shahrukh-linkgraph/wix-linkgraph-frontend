import {
  POST_CATEGORY_REQUEST,
  POST_CATEGORY_SUCCESS,
  POST_CATEGORY_FAILURE,
} from "./type";

const initialState = {
  categoryData: [],
  loading: false,
  error: null,
};

export default function AddPostsCategoriesReducer(
  state = initialState,
  action
) {
  
  switch (action.type) {
    case POST_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        categoryData: [],
      };

    case POST_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryData: action.data,
      };

    case POST_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
