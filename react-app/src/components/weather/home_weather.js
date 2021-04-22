import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as classes from "./home_weather.module.css";

function HomeWeather({ periods }) {
  let [position, setPosition] = useState(0);
  let [showAlert, setShowAlert] = useState(true);
  const { features } = useSelector(
    (state) => state.alerts || { features: null }
  );
  if (features && features.length && showAlert) {
    alert(`Here are major alerts for your area \n ${features}`);
    setShowAlert(false);
  }
  if (!periods) window.location.reload();
  var holderArr = new Array(periods.length);
  for (let i = 0; i < holderArr.length; i++) {
    let period = periods[i];
    holderArr[i] = {
      timeStr: <div className={classes.timeStr}>{period.name}</div>,
      temperature: (
        <div className={classes.temperature}>
          {period.temperature} deg. {period.temperatureUnit}
        </div>
      ),
      shortForecast: <div>{period.sortForecast}</div>,
      detailedForecast: <div>{period.detailedForecast}</div>,
    };
  }

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
        <h2>Here is the forcast for...</h2>
      </span>
      <div className={classes.Flex_Container}>
        <button className={classes.btnBack} onClick={decrement}>
          Back
        </button>
        <div className={classes.Outer_Container} id="home_weather_toggle">
          <div className={classes.Inner_Container}>
            {holderArr[position].timeStr}
            {holderArr[position].temperature}
            {holderArr[position].detailedForecast}
          </div>
        </div>
        <button className={classes.btnNext} onClick={increment}>
          Next
        </button>
      </div>
    </>
  );
}
export default HomeWeather;
