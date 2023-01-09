import { combineReducers } from "redux"
import users from "../pages/Home/components/Categories/redux/reducer"
import loginUserReducer from "../pages/LoginLinkGraph/redux/reducer"

export default combineReducers({
    users,
    // loginUserReducer
})
