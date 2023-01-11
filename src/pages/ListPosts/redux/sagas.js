import { call, put, takeLatest, all } from "redux-saga/effects";
import { LIST_POSTS_REQUEST } from "./type";
import { BASE_URL } from "../../../config/app";
import XHR from "../../../utils/XHR";
import { listPostsSuccess, listPostsFailure } from "./actions";

async function listPostsApi() {
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

function* listPosts() {
  try {
    const listPost = yield call(listPostsApi);
    console.log("List Post category", listPost);
    yield put(listPostsSuccess(listPost));
  } catch (e) {
    yield put(listPostsFailure(e));
  }
}

export default all([takeLatest(LIST_POSTS_REQUEST, listPosts)]);
