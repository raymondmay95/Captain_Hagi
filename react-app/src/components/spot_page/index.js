import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LocalWeather from "../weather";
import Comments from "../comments";
import * as classes from "./spot_page.module.css";

function Spot() {
  const [spot, setSpot] = useState({});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/spots/${id}`);
      const responseData = await response.json();
      const { lat, long } = responseData.location;
      setSpot(responseData);
      setLatitude(Number(lat));
      setLongitude(Number(long));
      setLoaded(true);
    }
    fetchData();
  }, [id]);
  return (
    <>
      <div className={classes.outerContainer}>
        <div className={classes.innerContainer}>
          <h1>{spot.name}</h1>
        </div>
        {loaded ? (
          <LocalWeather latitude={latitude} longitude={longitude} />
        ) : null}
        <Comments />
      </div>
    </>
  );
}

export default Spot;
