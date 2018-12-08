// Initialize and add the map
function initMap() {
  // The location of Manhattan in NYC
  var newyork = {lat: 40.758896, lng: -73.985130};
  // The map, centered at Manhattan
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: newyork });
  // The marker, positioned at Manhattan
  var marker = new google.maps.Marker({position: newyork , map: map});
}
