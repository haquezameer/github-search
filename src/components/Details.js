import React from "react";

const Details = ({
  location: {
    state: { repo }
  }
}) =>
  console.log(repo) || (
    <div>
      <div>
        Repository Name: <a href={repo.html_url}>{repo.full_name}</a>
      </div>
      <div>
        Owner:{" "}
        <a href="https://api.github.com/users/jasny">{repo.owner.login}</a>
      </div>
      <div>Stars: {repo.stargazers_count}</div>
      <div>Watchers: {repo.watchers_count}</div>
      <div>
        Homepage:{" "}
        <a target="_blank" href="http://jasny.github.io/bootstrap">
          {repo.homepage}
        </a>
      </div>
    </div>
  );

export default Details;
