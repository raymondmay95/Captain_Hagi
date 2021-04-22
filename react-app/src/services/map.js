import { Component } from "react";
export class Map extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=initMap`;
    document.body.appendChild(script);
  }
  render() {
    return <div id="initMap" ref={(el) => (this.div = el)}></div>;
  }
}

export function boundMap(latitude, longitude, zoom, divId) {
  if (!window.google) return;
  if (!latitude && !longitude) return;

  function initMap() {
    let map = new window.google.maps.Map(document.getElementById(`${divId}`), {
      center: { lat: Number(latitude), lng: Number(longitude) },
      zoom: zoom,
    });
    return map;
  }
  return initMap();
}
