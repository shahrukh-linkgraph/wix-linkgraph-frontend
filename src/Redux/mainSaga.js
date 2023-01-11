import { all } from "redux-saga/effects";
import ListCategorySaga from "../pages/ListCategory/redux/sagas";
import loginUserSaga from "../pages/LoginLinkGraph/redux/sagas";
import postslistSaga from "../pages/ListPosts/redux/sagas";
import AddCategorySaga from "../pages/AddCategory/redux/sagas";
import AddPostscategoriesSaga from "../pages/AddPostCategory/redux/sagas";
import addRegisterSaga from "../pages/AddMember/redux/sagas";
export default function* mainSaga() {
  yield all([
    ListCategorySaga,
    loginUserSaga,
    postslistSaga,
    AddCategorySaga,
    AddPostscategoriesSaga,
    addRegisterSaga
  ]);
}
