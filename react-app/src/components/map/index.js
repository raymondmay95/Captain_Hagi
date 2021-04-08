import React, { useEffect } from "react";
import boundMap from "../../services/map";
import boundMarkers from "../../services/marker";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as classes from "./map.module.css";

function MapComponent() {
  // eslint-disable-next-line
  let history = useHistory();
  let { coords } = useSelector((state) => state.coords);
  let { spots } = useSelector((state) => state.spots);

  useEffect(() => {
    if (!window.google) return;
    if (coords) {
      let { latitude, longitude } = coords;
      let map = boundMap(latitude, longitude, 7, "map", spots);
      boundMarkers(map, spots, history);
    }
  });

  return (
    <div className={classes.App}>
      <div className="map_container">
        <div id="map"></div>
      </div>
    </div>
  );
}

export default MapComponent;
