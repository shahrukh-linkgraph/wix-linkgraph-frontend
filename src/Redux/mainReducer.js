import { combineReducers } from "redux"
// import users from "../pages/Home/components/Categories/redux/reducer"
import users from "../pages/AddCategories/redux/reducer"
import loginUserReducer from "../pages/LoginLinkGraph/redux/reducer"
import postslistcategory from "../pages/PostCategories/redux/reducer"
import AddPostsCategoriesReducer from "../pages/AddPostsCategories/redux/reducer"
import postscategoriesReducer from "../pages/PostsCategoriesPost/redux/reducer"
export default combineReducers({
    users,
    loginUserReducer,
    postslistcategory,
    AddPostsCategoriesReducer,
    postscategoriesReducer
})
