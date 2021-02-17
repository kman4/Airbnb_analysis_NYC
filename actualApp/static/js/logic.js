// JSON DATA ROUTE
const url2 = "/api/map"

// Creating map object
var myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: "pk.eyJ1Ijoia21hbjQiLCJhIjoiY2trZWx6ajlxMGUxbDJucXRqN3F5cjhlYSJ9.jxFZ7QN6KRFnHr7tfY0wVQ"
}).addTo(myMap);

// Grab the data with d3
d3.json(url2, function(response) {

    // Create a new marker cluster group
    var markers = L.markerClusterGroup();

    // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var location = response[i];

    // Check for location property
    if (location) {

      popupText = "<b>ID:</b> " + location.id + 
      "<br><b>Borough:</b> " + location.borough +
      "<br><b>Neighbourhood:</b> " + location.neighbourhood +
      "<br><b>Room Type:</b> " + location.room_type +
      "<br><b>Rates (per night):</b> $" + location.price +
      "<br><a href='" + location.listing_url + "'>More details</a>";



      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.latitude, location.longitude])
        .bindPopup(popupText));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});



