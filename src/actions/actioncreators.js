import { SET_SEARCH_TERM, SET_REPOS_DATA, SORT_REPOS } from "./actions";
import LocalStorage from "localstorage";

const BASE_URL = `https://api.github.com`;
const repodatalocal = new LocalStorage("repodatalocal");

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
  const [err, cachedres] = repodatalocal.get(searchTerm);
  if (err) {
    return dispatch => {
      fetch(`${BASE_URL}/search/repositories?q=${searchTerm}`)
        .then(res => res.json())
        .then(res => {
          repodatalocal.put(searchTerm, res.items);
          dispatch(setReposData(res.items));
        })
        .catch(err => console.log(err));
    };
  } else {
    return dispatch => {
      dispatch(setReposData(cachedres));
    };
  }
}

export function sortRepos(field, repos) {
  const sortedRepos = repos.sort((a, b) => {
    return a[field] - b[field];
  });
  return {
    type: SORT_REPOS,
    payload: sortedRepos
  };
}
