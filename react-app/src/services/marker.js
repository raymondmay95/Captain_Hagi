function boundMarkers(map, spots, history) {
  if (!window.google) return;
  if (!spots.length) return;
  for (let spot in spots) {
    let { name } = spots[spot];
    let { id } = spots[spot];
    let spotMarker = new window.google.maps.Marker({
      position: {
        lat: Number(spots[spot].location.lat),
        lng: Number(spots[spot].location.long),
      },
      map: map,
    });
    spotMarker.customInfo = name;
    window.google.maps.event.addListener(spotMarker, "click", function () {
      history.push(`/spots/${id}`);
    });
  }
}

export default boundMarkers;
