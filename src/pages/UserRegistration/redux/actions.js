import {
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILURE,
} from "./type";

export const userRegistrationRequest = (data) => ({
  type: USER_REGISTRATION_REQUEST,
  data,
});

export const userRegistrationSuccess = (data) => ({
  type: USER_REGISTRATION_SUCCESS,
  data,
});

export const userRegistrationFailure = (error) => ({
  type: USER_REGISTRATION_FAILURE,
  error,
});
