import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as classes from "./home_weather.module.css";

function HomeWeather() {
  // const { coords } = useSelector((state) => state.coords);
  const { periods } = useSelector((state) => state.weather.properties);

  let holderArr = new Array(periods.length);
  for (let i = 0; i < holderArr.length; i++) {
    let period = periods[i];
    holderArr[i] = {
      timeStr: <div className={classes.timeStr}>{period.name}</div>,
      temperature: (
        <div className={classes.temperature}>
          {period.temperature} {period.temperatureUnit}
        </div>
      ),
      shortForecast: <div>{period.sortForecast}</div>,
      detailedForecast: <div>{period.detailedForecast}</div>,
    };
  }

  let [position, setPosition] = useState(0);
  function decrement(e) {
    e.preventDefault();
    if (position <= 0) return setPosition(0);
    return setPosition((position) => position - 1);
  }

  function increment(e) {
    e.preventDefault();
    if (position >= periods.length - 1) return setPosition(periods.length - 1);
    return setPosition((position) => position + 1);
  }
  return (
    <>
      <span className={classes.title}>
        <h1>Welcome Back...</h1>
      </span>
      <div className={classes.Outer_Container} id="home_weather_toggle">
        <button className={classes.btn} onClick={decrement}>
          Back
        </button>
        <div className={classes.Inner_Container}>
          {holderArr[position].timeStr}
          {holderArr[position].temperature}
          {holderArr[position].detailedForecast}
        </div>
        <button className={classes.btn} onClick={increment}>
          Next
        </button>
      </div>
    </>
  );
}
export default HomeWeather;
