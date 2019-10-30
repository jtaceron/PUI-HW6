import React from "react";
import { useParams } from "react-router";
import stateList from "../HomePage/stateList";
import "./LocationPage.css";

const LocationPage = () => {
  const { id } = useParams();
  const state = stateList.filter(state => state.id === id)[0];
  const { name, photo, keyline, who, why } = state;

  return (
    <div className="container">
      <br />
      <div className="row StateImage">
         <div className="col-lg-6 rounded mx-auto d-block">
          <img style={{ width: "100%" }} src={photo} alt={name} />
        </div>
      </div>
      <div className="row StateDetails">
       
        <div className="col-lg-10 mx-auto d-block">
          <br />
          <h1 className="LocationName">{name}</h1>
          <p className="KeylineContainer">{keyline}</p>
          <br />
          <br />

          <h4>Description</h4>
          {who.map((p, idx) => {
            return <p key={idx}>{p}</p>;
          })}
          <h4>Why is it important to JT?</h4>
          {why.map((p, idx) => {
            return <p key={idx}>{p}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
