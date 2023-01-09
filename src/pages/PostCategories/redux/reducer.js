import {
  GET_POST_CATEGORY_REQUEST,
  GET_POST_CATEGORY_SUCCESS,
  GET_POST_CATEGORY_FAILURE,
} from "./type";

const initialState = {
  allCategoryList: [],
  loading: false,
  error: null,
};

export default function postslistcategory(state = initialState, action) {

  switch (action.type) {
    case GET_POST_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_POST_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        allCategoryList: action.data,
      };

    case GET_POST_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
