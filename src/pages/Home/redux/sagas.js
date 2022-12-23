import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_USERS_REQUEST, GET_CATEGORY_REQUEST } from './type';
import { getUsersSuccess, getUsersFailure, getCategorySuccess, getCategoryFailure } from './actions';
//users
const apiUrl = `https://jsonplaceholder.typicode.com/users`;
async function getApi() {
   return fetch(apiUrl, {
      headers: {
         'Content-Type': 'application/json',
      },
      method: 'GET',
   }).then(response => response.json())
      .catch((error) => { throw error })
}
function* fetchUsers() {
   try {
      const users = yield call(getApi);
      console.log('users', users);
      yield put(getUsersSuccess(users));
   } catch (e) {
      yield put(getUsersFailure(e));
   }
}

//category
const apiUrls = `https://jsonplaceholder.typicode.com/posts/`;
async function postApi(data) {
   console.log('data>>>>',data);
   return fetch(apiUrls, {
      headers: {
         'Content-Type': 'application/json',
      },
      method: 'POST',
      data
   }).then(response => response.json())
      .catch((error) => { throw error })
}
function* fetchCategory({data}) {
   console.log('[post',data);
   try {
      const Category = yield call(postApi, data);
      console.log('Category', Category);
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







