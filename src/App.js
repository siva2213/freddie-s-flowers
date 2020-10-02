import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import appRoutes from "./routes/appRoutes";

class App extends Component {
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
        <Footer />
      </div>
    );
  }
}

export default App;
