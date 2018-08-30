import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Row,
  Col,
  Form,
  FormControl,
  FormGroup,
  Button
} from "react-bootstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      disabled: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getValidationState() {
    const length = this.state.query.length;
    if (length > 1) {
      return "success";
    } else {
      return "error";
    }
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.searchRepos(this.state.query);
    this.props.history.push("/results");
  }
  render() {
    return (
      <Grid>
        <Row>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup validationState={this.getValidationState()}>
              <Col xs={9} md={8}>
                <FormControl
                  onChange={this.handleChange}
                  value={this.state.query}
                  type="text"
                  name="search"
                  placeholder="Enter repository to search for.."
                />
              </Col>
              <Col xs={3} md={4}>
                <Button
                  type="submit"
                  disabled={this.state.query.length > 0 ? false : true}
                >
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Row>
      </Grid>
    );
  }
}

export default withRouter(Search);
