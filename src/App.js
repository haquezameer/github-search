import React, { Component } from "react";

import Search from "./components/Search";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }
  searchRepos(query) {
    console.log(query);
  }
  render() {
    return (
      <div className="App">
        <Search searchRepos={this.searchRepos} />
      </div>
    );
  }
}

export default App;
