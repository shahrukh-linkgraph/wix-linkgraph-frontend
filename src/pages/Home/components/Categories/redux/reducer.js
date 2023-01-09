import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_POST_CATEGORY_REQUEST,
  GET_POST_CATEGORY_SUCCESS,
  GET_POST_CATEGORY_FAILURE,
  POST_CATEGORY_REQUEST,
  POST_CATEGORY_SUCCESS,
  POST_CATEGORY_FAILURE
} from "./type";

const initialState = {
  allPosts: [],
  allUser: [],
  allCategoryList: [],
  categoryData: [],
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
