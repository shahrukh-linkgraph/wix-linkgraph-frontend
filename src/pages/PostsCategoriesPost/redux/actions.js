import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from "./type";

//FOR CATEGORY
export const getCategory = (data) => ({
  type: GET_CATEGORY_REQUEST,
  data,
});

export const getCategorySuccess = (data) => ({
  type: GET_CATEGORY_SUCCESS,
  data,
});

export const getCategoryFailure = (error) => ({
  type: GET_CATEGORY_FAILURE,
  error,
});
