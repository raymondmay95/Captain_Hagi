import React from "react";
import { useSelector } from "react-redux";
import LocalWeather from "../weather";
// import getFetch from "../services/fetch";
// import * as geolib from "geolib";

function Home() {
  // eslint-disable-next-line

  const { coords } = useSelector((state) => state.coords);

  return (
    <div className="App">
      <header>
        <p>
          {coords
            ? `lat:${coords.latitude} lon:${coords.longitude}`
            : "finding location"}
        </p>
      </header>
      <LocalWeather />
    </div>
  );
}

export default Home;
