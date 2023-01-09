import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  GET_USERS_REQUEST,
} from "./type";
// import { BASE_URL } from "../../../../../config/app";
import {BASE_URL} from "../../../config/app"
// import XHR from "../../../../../utils/XHR";
import XHR from "../../../utils/XHR";
import {
  getUsersSuccess,
  getUsersFailure,
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

export default all([
  takeLatest(GET_USERS_REQUEST, fetchUsers),
])

