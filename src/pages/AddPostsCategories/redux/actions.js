import {
  POST_CATEGORY_REQUEST,
  POST_CATEGORY_SUCCESS,
  POST_CATEGORY_FAILURE
} from "./type";

//FOR Add POST CATEGORY 
export const PostCategory = (data) => ({
  type: POST_CATEGORY_REQUEST,
  data
});

export const PostCategorySuccess = (data) => ({
  type: POST_CATEGORY_SUCCESS,
  data
});

export const PostCategoryFailure = (error) => ({
  type: POST_CATEGORY_FAILURE,
  error
})
