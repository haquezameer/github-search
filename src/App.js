import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Search from "./components/Search";
import RepoList from "./components/RepoList";
import Details from "./components/Details";
import store from "./store";

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
      <Router>
        <Provider store={store}>
          <div className="App">
            <Route
              exact
              path="/"
              render={() => <Search searchRepos={this.searchRepos} />}
            />
            <Route
              exact
              path="/results"
              render={() => (
                <RepoList
                  repos={this.state.repos}
                  sortBySelected={this.sortBySelected}
                />
              )}
            />
            <Route
              path="/results/details/:id"
              render={props => <Details {...props} repos={this.state.repos} />}
            />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
