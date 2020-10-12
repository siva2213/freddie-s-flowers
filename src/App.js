import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import { __item_list_path } from "./constants";
import Header from "./components/Nav/Nav";
import appRoutes from "./routes/appRoutes";

class App extends Component {
  componentDidMount() {
    this.props.history.push(__item_list_path);
  }
  render() {
    return (
      <div id="app-container">
        <Header />
        <div id="content">
          {appRoutes.map((route) => {
            return (
              <div key={route.name}>
                <Switch>
                  <Route {...route}></Route>
                </Switch>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(App);
