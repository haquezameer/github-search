import React from "react";

const RepoListItem = ({ repo }) => <div>{repo.full_name}</div>;

const RepoList = ({ repos }) =>
  repos && repos.length ? (
    repos.map(repo => <RepoListItem key={repo.id} repo={repo} />)
  ) : (
    <div>Enter repos you want to search for in the search bar</div>
  );

export default RepoList;
