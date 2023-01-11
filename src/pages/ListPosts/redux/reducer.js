import {
  LIST_POSTS_REQUEST,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
} from "./type";

const initialState = {
  listPosts: [],
  loading: false,
  error: null,
};

export default function ListPosts(state = initialState, action) {
  switch (action.type) {
    case LIST_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LIST_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        listPosts: action.data,
      };

    case LIST_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
