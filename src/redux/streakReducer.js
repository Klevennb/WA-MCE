const streakReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_STREAK":
      return action.payload;
    case "UNSET_USER":
      return {};
    default:
      return state;
  }
};

export default streakReducer;
