const entriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ENTRIES':
      return action.payload;
    // case 'SET_ALL_ENTRIES':
    //   return action.payload;
    case 'UNSET_USER':
      return [];
    default:
      return state;
  }
};

export default entriesReducer;
