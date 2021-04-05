import React, { useEffect } from "react";
import boundMap from "../../services/map";
import { useSelector } from "react-redux";
import * as classes from "./map.module.css";

function MapComponent() {
  // eslint-disable-next-line
  let { coords } = useSelector((state) => state.coords);
  let { spots } = useSelector((state) => state.spots);

  useEffect(() => {
    if (coords) {
      let { latitude, longitude } = coords;
      let map = boundMap(latitude, longitude, 7, "map", spots);
      for (let spot in spots) {
        new window.google.maps.Marker({
          position: {
            lat: Number(spots[spot].location.lat),
            lng: Number(spots[spot].location.long),
          },
          map: map,
        });
      }
    }
  }, [coords, spots]);

  return (
    <div className={classes.App}>
      <div className="map_container">
        <div id="map"></div>
      </div>
    </div>
  );
}

export default MapComponent;
