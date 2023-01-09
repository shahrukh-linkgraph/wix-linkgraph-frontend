import {
  GET_POST_CATEGORY_REQUEST,
  GET_POST_CATEGORY_SUCCESS,
  GET_POST_CATEGORY_FAILURE
} from "./type";

//FOR POST CATEGORY LIST
export const getPostCategory = () => ({
  type: GET_POST_CATEGORY_REQUEST,

});

export const getPostCategorySuccess = (data) => ({
  type: GET_POST_CATEGORY_SUCCESS,
  data
});

export const getPostCategoryFailure = (error) => ({
  type: GET_POST_CATEGORY_FAILURE,
  error
})