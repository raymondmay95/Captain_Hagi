import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCOORDSThunk } from "../../store/coords";
import LocalWeather from "../weather";
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
  const cords = useSelector((state) => state.coords.coords);

  return (
    <div className="App">
      <header>
        <p>
          {loaded
            ? `lat:${cords.latitude} lon:${cords.longitude}`
            : "finding location"}
        </p>
      </header>
      <LocalWeather />
    </div>
  );
}

export default Home;
