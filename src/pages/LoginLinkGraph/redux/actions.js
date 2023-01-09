import {
  POST_LOGIN_USER_REQUEST,
  POST_LOGIN_USER_SUCCESS,
  POST_LOGIN_USER_FAILURE,
} from "./type";

export const PostLoginUserRequest = (data) => ({
  type: POST_LOGIN_USER_REQUEST,
  data
});

export const PostLoginUserSuccess = (data) => ({
  type: POST_LOGIN_USER_SUCCESS,
  data
});

export const PostLoginUserFailure = (error) => ({
  type: POST_LOGIN_USER_FAILURE,
  error
})
