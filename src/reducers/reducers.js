import { SET_SEARCH_TERM } from "../actions/actions";

const DEFAULT_STATE = {
  repos: [],
  searchTerm: ""
};

const setSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
