import React, { useEffect, useState } from "react";
import MapComponent from "../map";
import boundMap from "../../services/map";
import { useSelector } from "react-redux";
// import LocalWeather from "../weather"; //render this in an icon
// import getFetch from "../services/fetch";
// import * as geolib from "geolib";

function Home() {
  // eslint-disable-next-line

  return (
    <div>
      <MapComponent />
    </div>
  );
}

export default Home;
