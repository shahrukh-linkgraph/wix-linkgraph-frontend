import {
  ADD_POST_CATEGORY_REQUEST,
  ADD_POST_CATEGORY_SUCCESS,
  ADD_POST_CATEGORY_FAILURE,
} from "./type";

export const addPostCategoryRequest = (data) => ({
  type: ADD_POST_CATEGORY_REQUEST,
  data,
});

export const addPostCategorySuccess = (data) => ({
  type: ADD_POST_CATEGORY_SUCCESS,
  data,
});

export const addPostCategoryFailure = (error) => ({
  type: ADD_POST_CATEGORY_FAILURE,
  error,
});
