import {
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
} from "./type";

//FOR Add POST CATEGORY
export const addCategoryRequest = (data) => ({
  type: ADD_CATEGORY_REQUEST,
  data,
});

export const addCategorySuccess = (data) => ({
  type: ADD_CATEGORY_SUCCESS,
  data,
});

export const addCategoryFailure = (error) => ({
  type: ADD_CATEGORY_FAILURE,
  error,
});
