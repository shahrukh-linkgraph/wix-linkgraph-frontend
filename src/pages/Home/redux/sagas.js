import { call, put, takeLatest, all } from "redux-saga/effects";
// import { useHistory } from "react-router-dom";
import { USER_AUTO_LOGIN_REQUEST } from "./type";
import { APP_ID, APP_SECRET_KEY, BASE_URL } from "../../../config/app";
import XHR from "../../../utils/XHR";
import { userAutoLoginSuccess, userAutoLoginFailure } from "./actions";

async function UserAutoLoginApi(data) {
  console.log("apidata", data);
  const URL = `${BASE_URL}/get_token/`;
  const options = {
    headers: {
      client_id: APP_ID,
      client_secret: APP_SECRET_KEY,
      // "Content-Type": "application/json",
      // Authorization: `token 005a17d69c332ee70c3620c12608d42ba7e1b52f`,
    },
    method: "POST",
    data,
  };

  return XHR(URL, options);
}

function* UserAutoLogin({ data }) {
  console.log("payload", data);
  // const navigate = useNavigate();

  try {
    const response = yield call(UserAutoLoginApi, data);
    console.log("response", response);
    localStorage.setItem("jwtToken", response?.data?.jwt_token);

    // navigate("/dashboard");
    yield put(userAutoLoginSuccess(response));
  } catch (e) {
    yield put(userAutoLoginFailure(e));
  }
}

export default all([takeLatest(USER_AUTO_LOGIN_REQUEST, UserAutoLogin)]);
