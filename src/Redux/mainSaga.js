import { all } from 'redux-saga/effects'
// import userSaga from '../pages/Home/components/Categories/redux/sagas'
// import userSaga from '../pages/AddCategories/redux/sagas'
import userSaga from "../pages/AddCategories/redux/sagas"
import loginUserSaga from '../pages/LoginLinkGraph/redux/sagas'
import postslistcategorySaga from '../pages/PostCategories/redux/sagas'
import AddPostsCategoriesSaga from '../pages/AddPostsCategories/redux/sagas'
import postscategoriesSaga from '../pages/PostsCategoriesPost/redux/sagas'
export default function* mainSaga() {
  yield all([
    userSaga,
    loginUserSaga,
    postslistcategorySaga,
    AddPostsCategoriesSaga,
    postscategoriesSaga
  ])
}