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
  render() {
    return (
      <div className="App">
        <Search searchRepos={this.searchRepos} />
        <ActionBar />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
