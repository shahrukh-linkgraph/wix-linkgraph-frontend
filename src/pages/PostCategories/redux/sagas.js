import { call, put, takeLatest, all } from "redux-saga/effects";
import { GET_POST_CATEGORY_REQUEST } from "./type";
// import { BASE_URL } from "../../../../../config/app";
import { BASE_URL } from "../../../config/app";
// import XHR from "../../../../../utils/XHR";
import XHR from "../../../utils/XHR";
import { getPostCategorySuccess, getPostCategoryFailure } from "./actions";
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

export default all([takeLatest(GET_POST_CATEGORY_REQUEST, fetchPostList)]);
