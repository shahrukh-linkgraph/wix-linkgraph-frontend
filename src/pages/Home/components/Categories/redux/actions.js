import { type } from "@testing-library/user-event/dist/type";
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
//FOR USER
export const getUsers = () => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  data,
});

export const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  error,
});

//FOR CATEGORY
export const getCategory =(data)=>({
    type: GET_CATEGORY_REQUEST,
    data
});

export const getCategorySuccess =(data)=>({
    type: GET_CATEGORY_SUCCESS,
    data
});

export const getCategoryFailure =(error)=>({
    type: GET_CATEGORY_FAILURE,
    error
})
//FOR POST CATEGORY LIST
export const getPostCategory =()=>({
  type: GET_POST_CATEGORY_REQUEST,
  
});

export const getPostCategorySuccess =(data)=>({
  type: GET_POST_CATEGORY_SUCCESS,
  data
});

export const getPostCategoryFailure =(error)=>({
  type: GET_POST_CATEGORY_FAILURE,
  error
})
//FOR POST CATEGORY POST
export const PostCategory =(data)=>({
  type: POST_CATEGORY_REQUEST,
  data
});

export const PostCategorySuccess =(data)=>({
  type: POST_CATEGORY_SUCCESS,
  data
});

export const PostCategoryFailure =(error)=>({
  type: POST_CATEGORY_FAILURE,
  error
})
