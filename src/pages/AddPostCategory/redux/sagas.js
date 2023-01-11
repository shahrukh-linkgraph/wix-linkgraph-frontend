import { call, put, takeLatest, all } from "redux-saga/effects";
import { ADD_POST_CATEGORY_REQUEST } from "./type";
import { BASE_URL } from "../../../config/app";
import XHR from "../../../utils/XHR";
import { addPostCategorySuccess, addPostCategoryFailure } from "./actions";
//category

async function addPostCategoryApi(data) {
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

function* addPostCategory({ data }) {
  console.log("[post", data);
  try {
    const resoponse = yield call(addPostCategoryApi, data);
    yield put(addPostCategorySuccess(resoponse));
    console.log("Response....", resoponse);
  } catch (e) {
    yield put(addPostCategoryFailure(e));
  }
}

export default all([takeLatest(ADD_POST_CATEGORY_REQUEST, addPostCategory)]);
