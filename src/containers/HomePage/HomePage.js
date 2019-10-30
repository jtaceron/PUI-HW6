import React, { Component } from 'react';
import USAMap from "react-usa-map";
import { Link } from "react-router-dom";
import stateList from "./stateList";
import { sortBy } from "lodash";
import "./HomePage.css";

class HomePage extends Component { 
  state = {
    states: stateList
  };
 
  statesCustomConfig = () => {
    return {
      "VA": {
        fill: "orange",
        clickHandler: (event) => window.location.assign("/VA")
      },
      "NY": {
        fill: "red",
        clickHandler: (event) => window.location.assign("/NY")
      },
      "MN": {
        fill: "purple",
        clickHandler: (event) => window.location.assign("/MN")
      },
      "CA": {
        fill: "blue",
        clickHandler: (event) => window.location.assign("/CA")
      },
      "WA": {
        fill: "green",
        clickHandler: (event) => window.location.assign("/WA")
      }
    };
  };

  render() {
    let { states } = this.state;
    states = sortBy(states, ["rank"]);

    return (
      <div className="Home">
        <div className="Banner">
         <h3 className="BannerText">
            My favorite states!
          </h3>
          <span className="USAMap">
            <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
          </span>
        </div>
        <br />

        <div className="container">
          <div className="BottomHalf">
            <p class="Instructions">
              Click the colored states on the map to learn more about each state or click on the state in the list below!
            </p>
            <div className="states">
              <ol >
                {states.map((state, idx) => {
                  return (
                    <li className="StateName" id={state.id}>
                      <Link
                        key={state.id}
                        to={`/${state.id}`}
                      >
                        <h2 className="">{state.name}</h2>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;
