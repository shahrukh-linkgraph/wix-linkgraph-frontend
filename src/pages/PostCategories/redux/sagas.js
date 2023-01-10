import { call, put, takeLatest, all } from "redux-saga/effects";
import { GET_POST_CATEGORY_REQUEST } from "./type";
import { BASE_URL } from "../../../config/app";
import XHR from "../../../utils/XHR";
import { getPostCategorySuccess, getPostCategoryFailure } from "./actions";
async function getPostApi() {
  const URL = `${BASE_URL}/list_posts/`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `token 005a17d69c332ee70c3620c12608d42ba7e1b52f`,
    },
    method: "GET",
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

export default all([takeLatest(GET_POST_CATEGORY_REQUEST, fetchPostList)]);
