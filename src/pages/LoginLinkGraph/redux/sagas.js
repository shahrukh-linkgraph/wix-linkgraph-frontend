import { call, put, takeLatest, all } from "redux-saga/effects";
import { POST_LOGIN_USER_REQUEST } from "./type";

import XHR from "../../../utils/XHR";
import { PostLoginUserSuccess, PostLoginUserFailure } from "./actions";

async function PostLoginUserApi(data) {
  console.log("PostLoginUserRequest", data);
  const URL = `https://api.searchatlas.com/api/token/`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    data,
  };

  return XHR(URL, options);
}

function* PostLoginUser({ data }) {
  try {
    const userlogin = yield call(PostLoginUserApi, data);
    localStorage.setItem("jwtToken", userlogin?.data?.token);
    yield put(PostLoginUserSuccess(userlogin));
  } catch (e) {
    console.log("login_error", e);
    yield put(PostLoginUserFailure(e));
  }
}

export default all([takeLatest(POST_LOGIN_USER_REQUEST, PostLoginUser)]);
