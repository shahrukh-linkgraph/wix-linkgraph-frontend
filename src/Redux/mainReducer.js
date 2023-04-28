import { combineReducers } from "redux";

import listCategoryReducer from "../pages/ListCategory/redux/reducer";
import loginUserReducer from "../pages/LoginLinkGraph/redux/reducer";
import ListPosts from "../pages/ListPosts/redux/reducer";
import AddCategorYReducer from "../pages/AddCategories/redux/reducer";
import addPostcategoryReducer from "../pages/AddPosts/redux/reducer";
import addRegisterReducer from "../pages/UserRegistration/redux/reducer";
import userAutoLoginReducer from "../pages/Home/redux/reducer";

export default combineReducers({
  listCategoryReducer,
  loginUserReducer,
  ListPosts,
  AddCategorYReducer,
  addPostcategoryReducer,
  addRegisterReducer,
  userAutoLoginReducer,
});
