import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCOORDSThunk } from "../store/coords";
// import getFetch from "../services/fetch";
// import * as geolib from "geolib";

function Home() {
  // eslint-disable-next-line
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCoords() {
      const success = async (position) => {
        const { latitude, longitude } = await position.coords;
        let new_obj = { latitude, longitude };
        return dispatch(setCOORDSThunk(new_obj)).then(() => setLoaded(true));
      };
      navigator.geolocation.getCurrentPosition(success, (e) => console.log(e));
    }
    return getCoords();
  }, [dispatch]);

  // useEffect(() => {
  //   if (loaded === "finished") return;
  //   setLoaded("fetching location");
  //   if (!navigator.geolocation) return "no geolocation avalible";
  //   async function fetchCoords() {
  //     const sucessfullLookup = async (postion) => {
  //       const { latitude, longitude } = await postion.coords;

  //       setLoaded("fetching weather");
  //       if (!latitude && !longitude) return;
  //       const fetchWeather = await fetch(
  //         `https://api.weather.gov/points/${latitude},${longitude}`
  //       );
  //       if (fetchWeather.ok) {
  //         const weather = await fetchWeather.json();
  //         setMyWeather(weather);
  //       } else {
  //         console.log(`couldn't fetch weather at ${latitude}, ${longitude}`);
  //       }
  //     };
  //     navigator.geolocation.getCurrentPosition(sucessfullLookup, (e) =>
  //       console.log(e)
  //     );
  //     if (myWeather) {
  //       setLoaded("setting properties");
  //       const { properties } = myWeather;
  //       const { forecast, forecastHourly, relativeLocation } = properties;
  //       // console.log(forecast, forecastHourly, relativeLocation.properties);
  //       setLocationText(
  //         relativeLocation.properties.city +
  //           ", " +
  //           relativeLocation.properties.state
  //       );
  //       setForecastUrl(forecast);
  //       setHourlyUrl(forecastHourly);
  //       setLoaded("finished");
  //     }
  //     async function getForcast(daily, hourly) {
  //       let daily_meta = await getFetch(daily);
  //       let hourly_meta = await getFetch(hourly);
  //       let weather_meta = { daily_meta, hourly_meta };
  //       setWeatherMeta(weather_meta);
  //       return weather_meta;
  //     }
  //     let whole_forcast = await getForcast(forecastUrl, hourlyUrl);
  //     console.log(whole_forcast);
  //   }
  //   fetchCoords();
  // }, [loaded, myWeather, forecastUrl, hourlyUrl]);
  return (
    <div className="App">
      <header>
        <p>{loaded ? "true" : "false"}</p>
      </header>
    </div>
  );
}

export default Home;
