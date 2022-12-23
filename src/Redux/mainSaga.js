import { all } from 'redux-saga/effects'
import userSaga from '../pages/Home/redux/sagas'

export default function* rootSaga() {
  yield all([
    userSaga(),
  ])
}