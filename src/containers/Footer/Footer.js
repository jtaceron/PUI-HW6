import React from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import Logo from "../../assets/imgs/usa-logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container Footer">
      <hr />
      <span>&copy;2019, JT Aceron, CMU
      <br/>
      Information about the states adapted from Wikipedia</span>
      <span className="LogoContainer">
        <Link to={appRoutes.home}>
          <img src={Logo} alt="logo" />
        </Link>
      </span>
      <br />
    </div>
  );
};

export default Footer;
