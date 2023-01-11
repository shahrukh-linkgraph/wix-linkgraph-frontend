import { all } from "redux-saga/effects";
import ListCategorySaga from "../pages/ListCategory/redux/sagas";
import loginUserSaga from "../pages/LoginLinkGraph/redux/sagas";
import postslistcategorySaga from "../pages/ListPosts/redux/sagas";
import AddCategorySaga from "../pages/AddCategory/redux/sagas";
import postscategoriesSaga from "../pages/AddPostCategory/redux/sagas";

export default function* mainSaga() {
  yield all([
    ListCategorySaga,
    loginUserSaga,
    postslistcategorySaga,
    AddCategorySaga,
    postscategoriesSaga,
  ]);
}
