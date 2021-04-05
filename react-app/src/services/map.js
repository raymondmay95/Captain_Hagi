function boundMap(latitude, longitude, zoom, divId, spots) {
  if (!window.google) return;

  function initMap() {
    let map = new window.google.maps.Map(document.getElementById(`${divId}`), {
      center: { lat: latitude, lng: longitude },
      zoom: zoom,
    });
    return map;
  }
  return initMap();
}
export default boundMap;
