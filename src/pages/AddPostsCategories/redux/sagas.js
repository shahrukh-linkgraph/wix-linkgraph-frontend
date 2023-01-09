import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  POST_CATEGORY_REQUEST,
} from "./type";
// import { BASE_URL } from "../../../../../config/app";
import { BASE_URL } from "../../../config/app";
// import XHR from "../../../../../utils/XHR";
import XHR from "../../../utils/XHR";
import {
  PostCategorySuccess,
  PostCategoryFailure,
} from "./actions";
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

export default all([
  takeLatest(POST_CATEGORY_REQUEST, fetchPostCreateCategory),
])

