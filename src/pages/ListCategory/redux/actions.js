import {
  LIST_CATEGORIES_REQUEST,
  LIST_CATEGORIES_SUCCESS,
  LIST_CATEGORIES_FAILURE,
} from "./type";

export const listCategoriesRequest = () => ({
  type: LIST_CATEGORIES_REQUEST,
});

export const listCategoriesSuccess = (data) => ({
  type: LIST_CATEGORIES_SUCCESS,
  data,
});

export const listCategoriesFailure = (error) => ({
  type: LIST_CATEGORIES_FAILURE,
  error,
});
