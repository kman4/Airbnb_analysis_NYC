
// JSON DATA ROUTE
const url2 = "/api/borough"

//PLOT FUNCTION - Display indicators, line graph, pie chart, bar graph and bubble chart by borough
function BuildPlots(borough) {

  //Retreive JSON data to be used to extract information
  d3.json(url2).then(function(data){

    //Retreive the sample dataset
    var sample_data = data.roomdata;
    //console.log(sample_data)

    //Filter sample data by first brough on the list
    var samples_filter = sample_data.filter(object => object.borough == borough);
    var samples= samples_filter[0]

     //Retrieve the required datalists for the plots
     const boroughs_list = samples.boroughs;
     console.log(boroughs_list);
})};
// Creating map object
 var myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11

  
});


// Use this link to get the geojson data.
var link = boroughs_list;

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: "pk.eyJ1Ijoia21hbjQiLCJhIjoiY2trZWx6ajlxMGUxbDJucXRqN3F5cjhlYSJ9.jxFZ7QN6KRFnHr7tfY0wVQ"
}).addTo(myMap);



// Function that will determine the color of a neighborhood based on the borough it belongs to
function chooseColor(borough) {
  switch (borough) {
  case "Brooklyn":
    return "yellow";
  case "Bronx":
    return "red";
  case "Manhattan":
    return "orange";
  case "Queens":
    return "green";
  case "Staten Island":
    return "purple";
  default:
    return "black";
  }
}

// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // Style each feature (in this case a neighborhood)
    style: function(feature) {
      return {
        color: "white",
        // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
        fillColor: chooseColor(feature.properties.borough),
        fillOpacity: 0.5,
        weight: 1.5
      };
    },
    // Called on each feature
    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },
        // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
        click: function(event) {
          myMap.fitBounds(event.target.getBounds());
        }
      });
      // Giving each feature a pop-up with information pertinent to it
      layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1> <hr> <h2>" + feature.properties.borough + "</h2>");

    }
  }).addTo(myMap);
});



