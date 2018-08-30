import React, { Component } from "react";

const SORT_BY_STARS = "stargazers_count";
const SORT_BY_FORKS = "forks_count";
const SORT_BY_WATCHERS = "watchers_count";

class ActionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: SORT_BY_STARS
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ selected: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.selected);
    this.props.sortBySelected(this.state.selected);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select
          value={this.state.selected}
          onChange={this.handleChange}
          name="sortby"
        >
          <option value={SORT_BY_STARS}> Stars </option>
          <option value={SORT_BY_FORKS}> Forks </option>
          <option value={SORT_BY_WATCHERS}> Watchers </option>
        </select>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default ActionBar;
