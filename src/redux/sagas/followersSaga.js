import axios from "axios";
import { takeEvery } from "redux-saga/effects";

function* addFollow(action) {

  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.post("/api/followers/add-follow", action.payload, config);
  } catch (error) {
    console.error(error)
  }
}

function* friendsSaga() {
  yield takeEvery("ADD_FOLLOW", addFollow);
}

export default friendsSaga;
