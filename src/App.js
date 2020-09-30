import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Router>
            <Switch>
              {appRoutes.map((route) => {
                return (
                  <div key={route.name}>
                    <Route {...route}></Route>
                  </div>
                );
              })}
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
