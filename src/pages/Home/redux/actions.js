import {
  USER_AUTO_LOGIN_REQUEST,
  USER_AUTO_LOGIN_SUCCESS,
  USER_AUTO_LOGIN_FAILURE,
} from "./type";

export const userAutoLoginRequest = (data) => ({
  type: USER_AUTO_LOGIN_REQUEST,
  data,
});

export const userAutoLoginSuccess = (data) => ({
  type: USER_AUTO_LOGIN_SUCCESS,
  data,
});

export const userAutoLoginFailure = (error) => ({
  type: USER_AUTO_LOGIN_FAILURE,
  error,
});
