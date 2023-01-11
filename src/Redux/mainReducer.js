import { combineReducers } from "redux";

import listCategoryReducer from "../pages/ListCategory/redux/reducer";
import loginUserReducer from "../pages/LoginLinkGraph/redux/reducer";
import ListPosts from "../pages/ListPosts/redux/reducer";
import AddCategorYReducer from "../pages/AddCategory/redux/reducer";
import postscategoriesReducer from "../pages/AddPostCategory/redux/reducer";
export default combineReducers({
  listCategoryReducer,
  loginUserReducer,
  ListPosts,
  AddCategorYReducer,
  postscategoriesReducer,
});
