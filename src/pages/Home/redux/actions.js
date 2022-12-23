import { type } from "@testing-library/user-event/dist/type";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE
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