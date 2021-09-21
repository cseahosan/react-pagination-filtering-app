import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Login from "./components/login.component";
import Movies from "./components/movies.component";
import Navigation from "./components/Navigation.component";

export default class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/sign-in" component={Login} />
        </Switch>
      </>
    );
  }
}
