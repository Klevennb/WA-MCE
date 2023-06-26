/* eslint-disable no-console -- TODO add logger */
import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get("api/user", config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    const payload = {
      id: response.data.id,
      username: response.data.username,
      currentStreak: response.data.current_streak,
      wordGoal: response.data.word_goal,
      streakGoal: response.data.time_goal,
      bio: response.data.bio,
      createdAt: response.data.created_at
    }

    yield put({ type: "SET_USER", payload });
  } catch (error) {
    console.log("User get request failed", error);
  }
}
function* editGoal(action) {
  try {
    yield axios.put(`api/user/${action.id}/newGoal`, action.payload);
    yield* fetchUser(); // delegate to fetchUser

  } catch (error) {
    console.log("User edit goal failed", error);
  }
}

function* editBio(action) {
  try {
    yield axios.put(`api/user/${action.id}/bio`, action.payload);
    yield* fetchUser(); // delegate to fetchUser

  } catch (error) {
    console.log("User edit bio failed", error);
  }
}

function* userSaga() {
  yield takeLatest("FETCH_USER", fetchUser);
  yield takeLatest("EDIT_GOAL", editGoal);
    yield takeLatest("EDIT_BIO", editBio);

}

export default userSaga;
/* eslint-enable no-console -- TODO add logger */

