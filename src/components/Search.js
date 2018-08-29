import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.searchRepos(this.state.query);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.query}
            type="text"
            name="search"
          />
          <input value="Submit" type="submit" name="submit" />
        </form>
      </div>
    );
  }
}

export default Search;
