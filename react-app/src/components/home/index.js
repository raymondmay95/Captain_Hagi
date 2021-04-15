import React, { useState } from "react";
import MapComponent from "../map";
import * as classes from "./home.module.css";
import { useSelector } from "react-redux";
import LoginForm from "../auth/LoginForm";
// import LocalWeather from "../weather"; //render this in an icon
// import getFetch from "../services/fetch";
// import * as geolib from "geolib";

function Home({ setAuthenticated, authenticated }) {
  return (
    <div className={classes.outter_container}>
      {authenticated ? <div>Put weather here!!!!</div> : <LoginForm />}
      <MapComponent />
    </div>
  );
}

export default Home;
