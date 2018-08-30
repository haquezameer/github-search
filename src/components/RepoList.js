import React from "react";
import { Link } from "react-router-dom";

const RepoListItem = ({ repo }) => (
  <div>
    <Link to={{ pathname: `/results/details/${repo.id}`, state: { repo } }}>
      <span>
        {repo.full_name} {repo.stargazers_count}
      </span>
    </Link>
  </div>
);

const RepoList = ({ repos }) =>
  repos && repos.length ? (
    repos.map(repo => <RepoListItem key={repo.id} repo={repo} />)
  ) : (
    <div>Please wait..</div>
  );

export default RepoList;
