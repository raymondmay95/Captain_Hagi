import React from "react";
import MapComponent from "../map";
import * as classes from "./home.module.css";
import LoginForm from "../auth/LoginForm";
import HomeWeather from "../weather/home_weather";
// import LocalWeather from "../weather"; //render this in an icon
// import getFetch from "../services/fetch";
// import * as geolib from "geolib";

function Home({ authenticated }) {
  return (
    <div className={classes.outter_container}>
      {authenticated ? <HomeWeather /> : <LoginForm />}
      <MapComponent />
    </div>
  );
}

export default Home;
