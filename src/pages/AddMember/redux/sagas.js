import { call, put, takeLatest, all } from "redux-saga/effects";
import { ADD_MEMBER_REGISTER } from "./type";
// import { BASE_URL } from "../../../config/app";
import { BASE_URL } from "../../../config/app";
// import XHR from "../../../utils/XHR";
import XHR from "../../../utils/XHR";
import { addRegisterSuccess, addRegisterFailure } from "./actions";
//category

async function addMemberRegisterApi(data) {
  console.log("Add Member data", data);
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
  console.log("[Member", data);
  try {
    const resoponse = yield call(addMemberRegisterApi, data);
    // setAdd(resoponse)
    yield put(addRegisterSuccess(resoponse));
    console.log("Add Member Response....", resoponse);
    // setAdd(resoponse)
  } catch (e) {
    yield put(addRegisterFailure(e));
  }
}

export default all([takeLatest(ADD_MEMBER_REGISTER, addMember)]);
