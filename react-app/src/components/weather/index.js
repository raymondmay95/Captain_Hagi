import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LocalWeather = () => {
  const [weather, setWeather] = useState(null);
  const [weatherMeta, setWeatherMeta] = useState(null);
  const [coordsStr, setCoordsStr] = useState(null);
  const { coords } = useSelector((state) => state.coords);
  const { longitude, latitude } = coords;

  useEffect(() => {
    async function getFetch() {
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
    getFetch();
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
    <ul>
      {weather.map((ele, i) => (
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
          {ele.name}
          <ul>
            <li key={ele.temperature}>
              {ele.temperature + " "}
              {ele.temperatureUnit}
            </li>
            <li key={ele.windSpeed}>
              {ele.windSpeed + " "}
              {ele.windDirection}
            </li>
            <li key={ele.number}>{ele.detailedForecast}</li>
          </ul>
        </li>
      ))}
    </ul>
  ) : null;
  return (
    <div>
      {coordsStr ? (
        <h3>
          {coordsStr.city}, {coordsStr.state}
        </h3>
      ) : (
        <h1>no</h1>
      )}
      {report ? report : null}
    </div>
  );
};

export default LocalWeather;
