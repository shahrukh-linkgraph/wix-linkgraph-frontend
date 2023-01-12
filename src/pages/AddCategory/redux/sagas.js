import { call, put, takeLatest, all } from "redux-saga/effects";
import { ADD_CATEGORY_REQUEST } from "./type";
import { BASE_URL } from "../../../config/app";
import XHR from "../../../utils/XHR";
import { addCategorySuccess, addCategoryFailure } from "./actions";

async function addCategoryApi(data) {
  console.log("post create api data", data);
  const URL = `${BASE_URL}/create_categories/`;
  const options = {
    headers: {
      // "Content-Type": "application/json",
      Authorization: `token 005a17d69c332ee70c3620c12608d42ba7e1b52f`,
    },
    method: "POST",
    data,
  };

  return XHR(URL, options);
}

function* addCategory({ data }) {
  try {
    const PostsCategory = yield call(addCategoryApi, data);
    console.log("Post Create Category....", PostsCategory);
    yield put(addCategorySuccess(PostsCategory));
  } catch (e) {
    yield put(addCategoryFailure(e));
  }
}

export default all([takeLatest(ADD_CATEGORY_REQUEST, addCategory)]);
