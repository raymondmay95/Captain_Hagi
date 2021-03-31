import React, { useState, useEffect } from "react";
import getFetch from "../services/fetch";
// import * as geolib from "geolib";

function Home() {
  const [loaded, setLoaded] = useState("uninitiated");
  const [myWeather, setMyWeather] = useState(null);
  const [hourlyUrl, setHourlyUrl] = useState("");
  const [forecastUrl, setForecastUrl] = useState("");
  const [locationText, setLocationText] = useState(null);
  const [weatherMeta, setWeatherMeta] = useState(null);
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (loaded === "finished") return;
    setLoaded("fetching location");
    if (!navigator.geolocation) return "no geolocation avalible";
    async function fetchCoords() {
      const sucessfullLookup = async (postion) => {
        const { latitude, longitude } = await postion.coords;

        setLoaded("fetching weather");
        const fetchWeather = await fetch(
          `https://api.weather.gov/points/${latitude},${longitude}`
        );
        if (fetchWeather.ok) {
          const weather = await fetchWeather.json();
          setMyWeather(weather);
        } else {
          console.log(`couldn't fetch weather at ${latitude}, ${longitude}`);
        }
      };
      navigator.geolocation.getCurrentPosition(sucessfullLookup, (e) =>
        console.log(e)
      );
      if (myWeather) {
        setLoaded("setting properties");
        const { properties } = myWeather;
        const { forecast, forecastHourly, relativeLocation } = properties;
        // console.log(forecast, forecastHourly, relativeLocation.properties);
        setLocationText(
          relativeLocation.properties.city +
            ", " +
            relativeLocation.properties.state
        );
        setForecastUrl(forecast);
        setHourlyUrl(forecastHourly);
        setLoaded("finished");
      }
      async function getForcast(daily, hourly) {
        let daily_meta = await getFetch(daily);
        let hourly_meta = await getFetch(hourly);
        let weather_meta = { daily_meta, hourly_meta };
        setWeatherMeta(weather_meta);
        return weather_meta;
      }
      let whole_forcast = await getForcast(forecastUrl, hourlyUrl);
      console.log(whole_forcast);
    }
    fetchCoords();
  });
  return (
    <div className="App">
      <header>
        <p>{locationText ? locationText : null}</p>
        <p>{loaded}</p>
        <p>{myWeather ? "success" : "fail"}</p>
        <p>{weatherMeta ? "Daily Forcast" : null}</p>
      </header>
    </div>
  );
}

export default Home;
