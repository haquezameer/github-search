import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

import ActionBar from "./ActionBar";

const RepoListItem = ({ repo }) => (
  <ListGroupItem>
    <Link to={{ pathname: `/results/details/${repo.id}`, state: { repo } }}>
      <span>
        {repo.full_name} {repo.stargazers_count}
      </span>
    </Link>
  </ListGroupItem>
);

const RepoList = ({ repos, sortBySelected }) =>
  repos && repos.length ? (
    <Grid>
      <Row>
        <ActionBar sortBySelected={sortBySelected} />
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <ListGroup>
          {repos.map(repo => (
            <RepoListItem key={repo.id} repo={repo} />
          ))}
        </ListGroup>
      </Row>
    </Grid>
  ) : (
    <div>Please wait..</div>
  );

export default RepoList;
