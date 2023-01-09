import { call, put, takeLatest, all } from "redux-saga/effects";
import { GET_CATEGORY_REQUEST } from "./type";
// import { BASE_URL } from "../../../../../config/app";
import { BASE_URL } from "../../../config/app";
// import XHR from "../../../../../utils/XHR";
import XHR from "../../../utils/XHR";
import { getCategorySuccess, getCategoryFailure } from "./actions";
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

export default all([takeLatest(GET_CATEGORY_REQUEST, fetchCategory)]);
