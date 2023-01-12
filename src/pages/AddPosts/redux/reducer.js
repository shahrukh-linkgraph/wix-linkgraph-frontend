import {
  ADD_POST_CATEGORY_REQUEST,
  ADD_POST_CATEGORY_SUCCESS,
  ADD_POST_CATEGORY_FAILURE,
} from "./type";

const initialState = {
  postCategory: [],
  loading: false,
  error: null,
};

export default function addPostcategoryReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        postCategory: [],
      };

    case ADD_POST_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        postCategory: action.data,
      };

    case ADD_POST_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
