import React, { useEffect, Component } from "react";
import ScriptTag from "react-script-tag";
import boundMap from "../../services/map";
import boundMarkers from "../../services/marker";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as classes from "./map.module.css";

class Map extends Component {
  render() {
    return (
      <ScriptTag
        async
        defer
        referrerPolicy="Access-Control-Allow-Origin"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=initMap`}
      ></ScriptTag>
    );
  }
}

function MapComponent() {
  // eslint-disable-next-line
  let history = useHistory();
  let { coords } = useSelector((state) => state.coords);
  let { spots } = useSelector((state) => state.spots);

  useEffect(() => {
    if (!window.google) return;
    if (coords) {
      let { latitude, longitude } = coords;
      let map = boundMap(latitude, longitude, 7, "map");
      boundMarkers(map, spots, history);
    }
  });

  return (
    <div className={classes.App}>
      <div className="map_container">
        <Map />
        <div id="map"></div>
      </div>
    </div>
  );
}

export default MapComponent;
