import { call, put, takeLatest, all } from "redux-saga/effects";
import { USER_REGISTRATION_REQUEST } from "./type";
import { BASE_URL } from "../../../config/app";
import XHR from "../../../utils/XHR";
import { userRegistrationSuccess, userRegistrationFailure } from "./actions";

async function UserRegistrationApi(data) {
  const URL = `${BASE_URL}/member_register/`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `token 005a17d69c332ee70c3620c12608d42ba7e1b52f`,
    },
    method: "POST",
    data,
  };

  return XHR(URL, options);
}

function* addMember({ data }) {
  try {
    const resoponse = yield call(UserRegistrationApi, data);
    yield put(userRegistrationSuccess(resoponse));
  } catch (e) {
    yield put(userRegistrationFailure(e));
  }
}

export default all([takeLatest(USER_REGISTRATION_REQUEST, addMember)]);
