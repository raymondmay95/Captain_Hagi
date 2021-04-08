function boundMap(latitude, longitude, zoom, divId, spots) {
  if (!window.google) return;
  if (!latitude && !longitude) return;

  function initMap() {
    let map = new window.google.maps.Map(document.getElementById(`${divId}`), {
      center: { lat: Number(latitude), lng: Number(longitude) },
      zoom: zoom,
    });
    return map;
  }
  if (initMap.call) {
    return initMap();
  } else {
    console.log("initing map...");
  }
}
export default boundMap;
