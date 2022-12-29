import { combineReducers } from "redux"
// import users from "../pages/Home/redux/reducer"
import users from "../pages/Home/components/Categories/redux/reducer"

export const rootReducer = combineReducers ({
    users,
})
