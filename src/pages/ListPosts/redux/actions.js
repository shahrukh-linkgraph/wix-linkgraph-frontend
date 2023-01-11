import {
  LIST_POSTS_REQUEST,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
} from "./type";

//FOR POST CATEGORY LIST
export const listPostsRequest = () => ({
  type: LIST_POSTS_REQUEST,
});

export const listPostsSuccess = (data) => ({
  type: LIST_POSTS_SUCCESS,
  data,
});

export const listPostsFailure = (error) => ({
  type: LIST_POSTS_FAILURE,
  error,
});
