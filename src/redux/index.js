import { combineReducers } from "redux";
import errors from "./errorsReducer";
import loginMode from "./loginModeReducer";
import user from "./userReducer";
// import prompt from './promptReducer';
import entry from "./entryReducer";
// import timer from './timeReducer';
// import edit from './editReducer';
import editReducer from "./editReducer";
// import genres from './genresReducer';
// import genreSave from './genreSaveReducer';
// import pinnedPrompt from './pinnedPrompt';
// import promptTypes from './promptTypeReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  loginMode,
  entry,
  editReducer,
});

export default rootReducer;
