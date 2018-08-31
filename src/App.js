import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Search from "./components/Search";
import RepoList from "./components/RepoList";
import Details from "./components/Details";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={Search} />
            <Route exact path="/results" component={RepoList} />
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
