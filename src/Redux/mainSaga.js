import { all } from 'redux-saga/effects'
import userSaga from '../pages/Home/components/Categories/redux/sagas'
import loginUserSaga from '../pages/LoginLinkGraph/redux/sagas'

export default function* mainSaga() {
  yield all([
    userSaga,
    // loginUserSaga,
  ])
}