import React from "react";
import { useSelector } from "react-redux";
import * as classes from "./home_weather.module.css";

function HomeWeather() {
  // const { coords } = useSelector((state) => state.coords);
  const { periods } = useSelector((state) => state.weather.properties);
  const element = periods.map((interval) => (
    <div className={classes.Inner_Container}>
      <ul className={classes.Element_Container}>
        <label>{interval.name}</label>
        <li key="temperature">
          {interval.temperature} {interval.temperatureUnit}
        </li>
        <li key="wind">
          {interval.windSpeed} {interval.windDirection}
        </li>
        <p>{interval.shortForecast}</p>
      </ul>
    </div>
  ));
  return <div className={classes.Outer_Container}>{element}</div>;
}
export default HomeWeather;
