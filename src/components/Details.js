import React from "react";
import { Card, CardHeader, CardBody, ImageHeader } from "react-simple-card";
import { Grid, Row, Col } from "react-bootstrap";

const Details = ({
  location: {
    state: { repo }
  }
}) =>
  console.log(repo) || (
    <div>
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Card style={{ marginTop: "2rem" }}>
              <CardHeader>
                <h2>
                  Repository Name:{" "}
                  <a target="_blank" href={repo.html_url}>
                    {repo.full_name}
                  </a>
                </h2>
              </CardHeader>
              <CardBody>
                <h3>
                  Owner:{" "}
                  <a href="https://api.github.com/users/jasny">
                    {repo.owner.login}
                  </a>
                </h3>
                <h3>Stars: {repo.stargazers_count}</h3>
                <h3>Watchers: {repo.watchers_count}</h3>
                <h3>
                  Homepage:{" "}
                  <a target="_blank" href="http://jasny.github.io/bootstrap">
                    {repo.homepage}
                  </a>
                </h3>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Grid>
    </div>
  );

export default Details;
