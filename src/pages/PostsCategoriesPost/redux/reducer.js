import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  
} from "./type";

const initialState = {
  allCategoryList: [],
  loading: false,
  error: null,
};

export default function postscategoriesReducer(state = initialState, action) {
  switch (action.type) {
   
    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        allPosts: [],
      };

    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        allPosts: action.data,
      };

    case GET_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
