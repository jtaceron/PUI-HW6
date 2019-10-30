import React, { Component } from "react";
import "./AboutPage.css";

class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1>About</h1>
        <p className="AboutText">
          This website shows my top 5 favorite states in all of the United States 
          of America. I've ranked these 5 and color coded them in the home page. 
          Users can click on the colored state in the map or they can click the 
          link underneath the map instead. The color of the links and state match
          to make it easier for users to identify.   
        </p>
      </div>
    );
  }
}

export default AboutPage;
