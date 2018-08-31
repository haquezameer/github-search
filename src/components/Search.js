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
import { connect } from "react-redux";

import { setSearchTerm } from "../actions/actioncreators";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getValidationState() {
    const length = this.props.searchTerm.length;
    if (length > 1) {
      return "success";
    } else {
      return "error";
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.searchRepos(this.props.searchTerm);
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
                  onChange={this.props.handleChange}
                  value={this.props.searchTerm}
                  type="text"
                  name="search"
                  placeholder="Enter repository to search for.."
                />
              </Col>
              <Col xs={3} md={4}>
                <Button
                  type="submit"
                  disabled={this.props.searchTerm.length > 0 ? false : true}
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

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = dispatch => ({
  handleChange(e) {
    dispatch(setSearchTerm(e.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Search));
