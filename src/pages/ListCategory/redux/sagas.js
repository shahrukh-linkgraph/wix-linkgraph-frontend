import { call, put, takeLatest, all } from "redux-saga/effects";
import { LIST_CATEGORIES_REQUEST } from "./type";
import { BASE_URL } from "../../../config/app";
import XHR from "../../../utils/XHR";
import { listCategoriesSuccess, listCategoriesFailure } from "./actions";

async function ListCategoryApi() {
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

function* ListCategory() {
  try {
    const users = yield call(ListCategoryApi);
    console.log("users", users);
    yield put(listCategoriesSuccess(users));
  } catch (e) {
    yield put(listCategoriesFailure(e));
  }
}

export default all([takeLatest(LIST_CATEGORIES_REQUEST, ListCategory)]);
