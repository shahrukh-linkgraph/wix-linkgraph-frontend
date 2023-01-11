import {
 ADD_MEMBER_REGISTER,
 ADD_MEMBER_REGISTER_SUCCESS,
 ADD_MEMBER_REGISTER_FAILURE
} from "./type";

export const addRegisterRequest = (data) => ({
  type: ADD_MEMBER_REGISTER,
  data,
});

export const addRegisterSuccess = (data) => ({
  type: ADD_MEMBER_REGISTER_SUCCESS,
  data,
});

export const addRegisterFailure = (error) => ({
  type: ADD_MEMBER_REGISTER_FAILURE,
  error,
});
