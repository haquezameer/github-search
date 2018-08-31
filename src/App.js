import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Search from "./components/Search";
import RepoList from "./components/RepoList";
import Details from "./components/Details";
import store from "./store";
import history from "./history";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchRepos = this.searchRepos.bind(this);
    this.sortBySelected = this.sortBySelected.bind(this);
  }
  searchRepos(query) {
    console.log(query);
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
      <Router history={history}>
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
              render={() => <RepoList sortBySelected={this.sortBySelected} />}
            />
            <Route
              path="/results/details/:id"
              render={props => <Details {...props} />}
            />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
