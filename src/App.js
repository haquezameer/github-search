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
  }
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" render={() => <Search />} />
            <Route exact path="/results" render={() => <RepoList />} />
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
