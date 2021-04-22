import React, { useEffect } from "react";
import { boundMap } from "../../services/map";
import boundMarkers from "../../services/marker";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as classes from "./map.module.css";

// class Map extends Component {
//   componentDidMount() {
//     const script = document.createElement("script");
//     script.async = true;
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=initMap`;
//     document.body.appendChild(script);
//   }
//   render() {
//     return <div id="initMap" ref={(el) => (this.div = el)}></div>;
//   }
// }

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
    <>
      <div id="map" className={classes.map}></div>
    </>
  );
}

export default MapComponent;
