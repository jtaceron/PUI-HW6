import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./shared/appRoutes";
import NavBar from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";
import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/AboutPage/AboutPage";
import LocationPage from "./containers/LocationPage/LocationPage";


class App extends Component { 
  render() {
    return (
      <div className="App">
        <NavBar />

        <div className="MainContent"> 
          <Switch>
            <Route exact path={appRoutes.home}>
              <HomePage />
            </Route>
            <Route exact path={appRoutes.characters}>
              <AboutPage />
            </Route>
            <Route exact path={appRoutes.location}>
              <LocationPage />
            </Route>
            <Redirect to={appRoutes.home} />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
};

export default App;
