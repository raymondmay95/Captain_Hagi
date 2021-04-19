import React from "react";
import { useSelector } from "react-redux";
import MapComponent from "../map";
import * as classes from "./home.module.css";
import LoginForm from "../auth/LoginForm";
import HomeWeather from "../weather/home_weather";
// import LocalWeather from "../weather"; //render this in an icon
// import getFetch from "../services/fetch";
// import * as geolib from "geolib";
import Graphy from "../graph";

function Home({ authenticated, setAuthenticated }) {
  const periods = useSelector((state) => state?.weather?.properties?.periods);
  return (
    <div className={classes.outter_container}>
      <div className={classes.inner_container}>
        {authenticated ? (
          <HomeWeather />
        ) : (
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            id={classes.LoginForm}
          />
        )}
      </div>
      <MapComponent />
      <div className={classes.graph_components}>
        <div className={classes.temp_graph}>
          {periods ? <Graphy data={periods} title={"Temperature (F)"} /> : null}
        </div>
        <div className={classes.wind_graph}>
          {periods ? (
            <Graphy id={classes.Plot} data={periods} title={"WindSpeed"} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
