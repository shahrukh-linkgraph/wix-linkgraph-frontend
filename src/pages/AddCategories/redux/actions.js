import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
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
