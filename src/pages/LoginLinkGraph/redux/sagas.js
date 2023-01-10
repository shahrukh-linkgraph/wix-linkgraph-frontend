import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  POST_LOGIN_USER_REQUEST,
} from "./type";
// import { BASE_URL } from "../../../config/app";
import XHR from "../../../utils/XHR";
import {
  PostLoginUserSuccess,
  PostLoginUserFailure,
} from "./actions";

async function PostLoginUserApi(data) {
  console.log("PostLoginUserRequest", data);
  const URL = `https://api.searchatlas.com/api/token/`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `token 005a17d69c332ee70c3620c12608d42ba7e1b52f`,
    },
    method: "POST",
    data,
  };

  return XHR(URL, options);
}

function* PostLoginUser({ data }) {
  // console.log("fetchPostCreateCategory", data);
  try {
    const userlogin = yield call(PostLoginUserApi, data);
    // console.log("userlogin....", userlogin);
    localStorage.setItem("JWT Token",userlogin?.data?.token)
    yield put(PostLoginUserSuccess(userlogin));
  } catch (e) {
    console.log('error', e);
    yield put(PostLoginUserFailure(e));
  }
}

export default all([
  takeLatest(POST_LOGIN_USER_REQUEST, PostLoginUser),
]);
