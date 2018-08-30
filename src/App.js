import React, { Component } from "react";

import Search from "./components/Search";
import RepoList from "./components/RepoList";
import ActionBar from "./components/ActionBar";

import "./App.css";

const BASE_URL = `https://api.github.com`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
    this.searchRepos = this.searchRepos.bind(this);
    this.sortBySelected = this.sortBySelected.bind(this);
  }
  searchRepos(query) {
    console.log(query);
    fetch(`${BASE_URL}/search/repositories?q=${query}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ repos: res.items });
      })
      .catch(err => console.log(err));
  }
  sortBySelected(option) {
    console.log(option);
    const { repos } = this.state;
    const sortarr = repos.sort((a, b) => {
      return a[option] - b[option];
    });
    console.log(sortarr);
    this.setState({ repos: sortarr });
  }
  render() {
    return (
      <div className="App">
        <Search searchRepos={this.searchRepos} />
        <ActionBar sortBySelected={this.sortBySelected} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
