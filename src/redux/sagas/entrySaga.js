import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* addEntry(action) {

  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.post("/api/entries", action.payload, config);
  } catch (error) {
    console.error(error)
  }
}
function* getAllEntries(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get("/api/entries", action.payload, config);

    const payload = response.data.map( res => {
      return ({id: res.id,
      name: res.title,
      content: res.contents,
      wordCount: res.length,
      genre: res.genre,
      submission_time: res.submission_time,
      public: res.public,
      isDeleted: res.is_deleted
    })
    })
    yield put({ type: "SET_ENTRIES", payload });
  } catch (error) {    
    console.error(error)

  }
}

function* editEntry(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("/api/entries", action.payload, config);
    // yield put({ type: "EDIT_ENTRIES", payload: response.data });  <--- What's this for?
  } catch (error) {    
    console.error(error)

  }
}

function* softDeleteEntry(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("/api/entries", action.payload, config);
    // yield put({ type: "EDIT_ENTRIES", payload: response.data });
  } catch (error) {     
    console.error(error)
  }
}

function* entrySaga() {
  yield takeEvery("ADD_ENTRY", addEntry);
  yield takeEvery("GET_ALL_ENTRIES", getAllEntries);
  yield takeEvery("EDIT_ENTRY", editEntry);
  yield takeEvery("SOFT_DELETE_ENTRY", softDeleteEntry);

  // TODO: getPublicEntries
}

export default entrySaga;
