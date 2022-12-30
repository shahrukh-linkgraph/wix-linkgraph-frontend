import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_USERS_REQUEST,
  GET_CATEGORY_REQUEST,
  GET_POST_CATEGORY_REQUEST,
  POST_CATEGORY_REQUEST,
} from "./type";
import { BASE_URL } from "../../../../../config/app";
import XHR from "../../../../../utils/XHR";
import {
  getUsersSuccess,
  getUsersFailure,
  getCategorySuccess,
  getCategoryFailure,
  getPostCategorySuccess,
  getPostCategoryFailure,
  PostCategorySuccess,
  PostCategoryFailure,
} from "./actions";
//get list Category Api
async function getApi() {
  const URL = `${BASE_URL}/get_categories/`;
  // const accessToken = await AsyncStorage.getItem('authToken');
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `token 005a17d69c332ee70c3620c12608d42ba7e1b52f`,
    },
    method: "GET",
    // data
  };

  return XHR(URL, options);
}

function* fetchUsers() {
  try {
    const users = yield call(getApi);
    console.log("users", users);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersFailure(e));
  }
}

//get list Post Category Api
async function getPostApi() {
  const URL = `${BASE_URL}/list_posts/`;
  // const accessToken = await AsyncStorage.getItem('authToken');
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `token 005a17d69c332ee70c3620c12608d42ba7e1b52f`,
    },
    method: "GET",
    // data
  };

  return XHR(URL, options);
}

function* fetchPostList() {
  try {
    const listPost = yield call(getPostApi);
    console.log("List Post category", listPost);
    yield put(getPostCategorySuccess(listPost));
  } catch (e) {
    yield put(getPostCategoryFailure(e));
  }
}

//category
async function postApi(data) {
  console.log("post api data", data);
  const URL = `${BASE_URL}/post_categories/`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `token 005a17d69c332ee70c3620c12608d42ba7e1b52f`,
    },
    method: "POST",
    data,
  };

  return XHR(URL, options);
}

function* fetchCategory({ data }) {
  console.log("[post", data);
  try {
    const resoponse = yield call(postApi, data);
    yield put(getCategorySuccess(resoponse));
    console.log("Response....", resoponse);
  } catch (e) {
    yield put(getCategoryFailure(e));
  }
}
//Post Create Category Post
async function postCreateApi(data) {
  console.log("post create api data", data);
  const URL = `${BASE_URL}/create_categories/`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `token 005a17d69c332ee70c3620c12608d42ba7e1b52f`,
    },
    method: "POST",
    data,
  };

  return XHR(URL, options);
}

function* fetchPostCreateCategory({ data }) {
  console.log("fetchPostCreateCategory", data);
  try {
    const PostsCategory = yield call(postCreateApi, data);
    console.log("Post Create Category....", PostsCategory);
     yield put(PostCategorySuccess(PostsCategory));
  } catch (e) {
    yield put(PostCategoryFailure(e));
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS_REQUEST, fetchUsers);
  yield takeEvery(GET_POST_CATEGORY_REQUEST, fetchPostList);
  yield takeEvery(GET_CATEGORY_REQUEST, fetchCategory);
  yield takeEvery(POST_CATEGORY_REQUEST, fetchPostCreateCategory);
}
export default userSaga;
