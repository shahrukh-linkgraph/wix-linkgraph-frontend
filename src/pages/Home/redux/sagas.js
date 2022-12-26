import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_REQUEST, GET_CATEGORY_REQUEST } from "./type";
import { BASE_URL } from '../../../config/app';
import XHR from '../../../utils/XHR';
import {
  getUsersSuccess,
  getUsersFailure,
  getCategorySuccess,
  getCategoryFailure,
} from "./actions";
async function getApi() {
  const URL = `https://jsonplaceholder.typicode.com/users`;
  // const accessToken = await AsyncStorage.getItem('authToken');
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `token 005a17d69c332ee70c3620c12608d42ba7e1b52f`,
    },
    method: 'GET',
    // data
  };

  return XHR(URL, options);
}
//users
// const apiUrl = `https://web-production-d853.up.railway.app/get_category/`;
// async function getApi() {
//   return fetch(apiUrl, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "token 005a17d69c332ee70c3620c12608d42ba7e1b52f",
//     },
//     method: "GET",
//   })
//     .then((response) => {
//       console.log('reess', response)
//       response.json();
//     })
//     .catch((error) => {
//       console.log("err", error)
//       throw error;
//     });
// }
function* fetchUsers() {
  try {
    const users = yield call(getApi);
    console.log("users", users);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersFailure(e));
  }
}

//category
async function postApi(data) {
  const URL = `${BASE_URL}/data/`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token 005a17d69c332ee70c3620c12608d42ba7e1b52f`,
    },
    method: 'POST',
    data
  };

  return XHR(URL, options);
}
// const apiUrls = `https://jsonplaceholder.typicode.com/posts/`;
// async function postApi(data) {
//   console.log("data>>>>", data);
//   return fetch(apiUrls, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     data,
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       throw error;
//     });
// }
function* fetchCategory({ data }) {
  console.log("[post", data);
  try {
    const Category = yield call(postApi, data);
    console.log("Category", Category);
    yield put(getCategorySuccess(Category));
  } catch (e) {
    yield put(getCategoryFailure(e));
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS_REQUEST, fetchUsers);
  yield takeEvery(GET_CATEGORY_REQUEST, fetchCategory);
}
export default userSaga;
