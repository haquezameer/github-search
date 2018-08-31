import { SET_SEARCH_TERM, SET_REPOS_DATA } from "../actions/actions";

const DEFAULT_STATE = {
  repos: [],
  searchTerm: ""
};

const setSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const setReposData = (state, action) => {
  return Object.assign({}, state, { repos: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case SET_REPOS_DATA:
      return setReposData(state, action);
    default:
      return state;
  }
};

export default rootReducer;
