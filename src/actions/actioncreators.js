import { SET_SEARCH_TERM, SET_REPOS_DATA } from "./actions";

const BASE_URL = `https://api.github.com`;

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function setReposData(repos) {
  return {
    type: SET_REPOS_DATA,
    payload: repos
  };
}

export function getReposData(searchTerm) {
  return dispatch => {
    fetch(`${BASE_URL}/search/repositories?q=${searchTerm}`)
      .then(res => res.json())
      .then(res => {
        dispatch(setReposData(res.items));
      })
      .catch(err => console.log(err));
  };
}
