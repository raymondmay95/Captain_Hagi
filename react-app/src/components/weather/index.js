import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { useSelector } from "react-redux";
import * as classes from "./weather.module.css";
import Item from "./item";
import Graphy from "../graph";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 4 },
  { width: 768, itemsToShow: 6 },
  { width: 1200, itemsToShow: 8 },
];

const LocalWeather = ({ longitude, latitude }) => {
  const [weather, setWeather] = useState(null);
  const [weatherMeta, setWeatherMeta] = useState(null);
  const [coordsStr, setCoordsStr] = useState(null);
  const { coords } = useSelector((state) => state.coords);
  if (!longitude && !latitude) {
    latitude = coords.latitude;
    longitude = coords.longitude;
  }

  useEffect(() => {
    async function getFetch(latitude, longitude) {
      if (!longitude && !latitude) return;
      const response = await fetch(
        `https://api.weather.gov/points/${latitude},${longitude}`
      );
      if (response.ok) {
        const { properties } = await response.json();
        const { relativeLocation, forecast } = properties;
        setWeatherMeta(forecast);
        setCoordsStr(relativeLocation.properties);
      } else {
        console.log("failed to fetch");
        return response.status;
      }
    }
    getFetch(latitude, longitude);
  }, [longitude, latitude]);

  useEffect(() => {
    async function getFetch() {
      if (weatherMeta) {
        const response = await fetch(weatherMeta);
        if (response.ok) {
          const { properties } = await response.json();
          const { periods } = properties;
          setWeather(periods);
        } else {
          return response.status;
        }
      } else {
        console.log("no weather meta data.");
      }
    }
    getFetch();
  }, [weatherMeta]);

  const report = weather ? (
    <div className={classes.OuterWeather_Container}>
      <ul className={classes.Weather_Container}>
        <Carousel breakPoints={breakPoints}>
          {weather.map((ele, i) => (
            <Item key={`item${i}`}>
              <li key={ele.name}>
                <div
                  style={{
                    background: `url(${ele.icon}) no-repeat center`,
                    width: `20px`,
                    height: `20px`,
                    backgroundSize: `40px`,
                    borderRadius: "50%",
                  }}
                ></div>
                <label htmlFor={ele.name}>{ele.name}</label>
                <ul>
                  <li key="temperature" className={classes.Temperature}>
                    {ele.temperature + " "}
                    {ele.temperatureUnit}
                  </li>
                  <li key="ele.windSpeed" className={classes.Wind}>
                    {ele.windSpeed + " "}
                    {ele.windDirection}
                  </li>
                  <li key={`detailedForcast`}>{ele.detailedForecast}</li>
                </ul>
              </li>
            </Item>
          ))}
        </Carousel>
        <Graphy data={weather} title={"Temperature (F)"} />
        <Graphy data={weather} title={"WindSpeed"} />
      </ul>
    </div>
  ) : null;
  return (
    <div>
      {coordsStr ? (
        <div className={classes.coordsStr}>
          <h3>
            {coordsStr.city}, {coordsStr.state}
          </h3>
        </div>
      ) : (
        <span>fetching weather...</span>
      )}
      {report ? report : null}
    </div>
  );
};

export default LocalWeather;
