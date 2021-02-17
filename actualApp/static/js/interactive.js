// JSON DATA ROUTE
const url3 = "/api/neigh_rate";
const url4 = "/api/hotel_rate";
const url5 = "/api/entire_rate";
const url6 = "/api/private_rate";
const url7 = "/api/shared_rate";

//Add overlay layers
var rates_neighbourhood = new L.LayerGroup();
var rates_hotel = new L.LayerGroup();
var rates_entire = new L.LayerGroup();
var rates_private = new L.LayerGroup();
var rates_shared = new L.LayerGroup();

  
function createMap() {
  var grayScale = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/light-v10",
      accessToken: API_KEY
    });

  var darkScale = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/dark-v10",
      accessToken: API_KEY
    });

    var street = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    });
  
    var baseMaps = {
        "Grayscale": grayScale,
        "Dark": darkScale,
        "Street": street
    };
  
    var overlayMaps = {
        "Average Rates (Overall)": rates_neighbourhood,
        "Average Rates (Entire Home/Apartment)": rates_entire,
        "Average Rates (Hotel)": rates_hotel, 
        "Average Rates (Private Room)": rates_private, 
        "Average Rates (Shared Room)": rates_shared
    };
  
  
// Creating map object
var myMap = L.map('mapid', {
center: [40.7081, -73.9571],
zoom: 10, 
layers: [grayScale, rates_neighbourhood]
});
  
    L.control.layers(baseMaps, overlayMaps).addTo(myMap);
  
  
  
//  add the legend to the map
  var legend = L.control({position: 'topright'});

  legend.onAdd = function (map) {
  // create a div for the legend
      var div = L.DomUtil.create('div', 'info legend');
          div.innerHTML += "<b>Rates</p>";
          grades = [0, 50, 100, 150, 200, 250, 300, 800]
          labels = ["<50", "50-100", "100-150", "150-200", "200-250", "250-300", "300+", "N/A"]
          color = ["#C7E9C0","#A1D99B","#74C476","#41AB5D","#238B45","#006D2C", "#145A32", "#A6ACAF"]
      

      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + color[i] + '"></i> ' + 
              labels[i] + '<br>' ;
      }        
      return div;
  };
  legend.addTo(myMap);
}

//AVG RATES BY NEIGHBOURHOOD
// grab the data with d3
d3.json(url3, function(data){

//   console.log(data.length)
//   console.log(data[0].neighbourhood)
//   console.log(nyc.features.length)
//   console.log(nyc.features[2].properties.neighborhood)

  
  for(var i = 0; i < data.length; i++) {
      for(var j=0; j < nyc.features.length; j++) {
       if(data[i].neighbourhood === nyc.features[j].properties.neighborhood) {
        //console.log(nyc[0].features[j].properties.neighbourhood)
            nyc.features[j].properties.price = data[i].price;
            //console.log(data[i].price)
      };
    };
  };


   // Create pop up box and close box button for popupText
   function onEachFeature(feature, layer) {

    // create the popup variable
    var popupHtml = "<b>Neighbourhood:</b> "+ feature.properties.neighborhood +  
    "," + feature.properties.borough+
    "<br><b>Average Rates (Overall): </b>$" + feature.properties.price;

    // add the popup to the map and set location
    layer.bindPopup(popupHtml, {
        closeButton: false,
        offset: L.point(0, -20)
        });

    // Create event to display popupText information on mouseover activity
    layer.on('mouseover', function() {
        layer.openPopup();
        });
    }       
    
    // create function that assign colors
    function getColor(d) {
        return d < 50  ? "#c7e9c0":
               d < 100 ? "#a1d99b":
               d < 150 ? "#74c476":
               d < 200 ? "#41ab5d":
               d < 250 ? "#238b45":
               d < 300 ? "#006d2c":
               d <= 1200 ? "#145A32":
                              " #A6ACAF"                               
    }     

    // create style function 
    function style(feature) {
      return {
          fillColor: getColor(feature.properties.price),
          weight: 2,
          opacity: 0.8,
          color: 'gray',
          fillOpacity: 1
      }
  }
  
  
    //  add the style and onEachFeature function to the map
    geojson = L.geoJson(nyc, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(rates_neighbourhood);
    createMap(rates_neighbourhood)

});

//AVG RATES BY HOTEL ROOM
// grab the data with d3

d3.json(url4, function(data){

    //   console.log(data.length)
    //   console.log(data[0].neighbourhood)
    //   console.log(nyc.features.length)
    //   console.log(nyc.features[2].properties.neighborhood)
    
      
      for(var i = 0; i < data.length; i++) {
          for(var j=0; j < nyc.features.length; j++) {
           if(data[i].neighbourhood === nyc.features[j].properties.neighborhood) {
            //console.log(nyc[0].features[j].properties.neighbourhood)
                nyc.features[j].properties.price_hotel = data[i].price;
                //console.log(data[i].price)
          };
        };
      };
   
        //Create event to display popupText information on mouseover activity
        function hotel_eachFeature(feature, layer) {

            // create the popup variable
            var popupHtml1 = "<b>Neighbourhood:</b> "+ feature.properties.neighborhood +  
            "," + feature.properties.borough+
            "<br><b>Average Rates (Hotel Room): </b>$" + feature.properties.price_hotel;

            // add the popup to the map and set location
            layer.bindPopup(popupHtml1, {
                closeButton: false,
                offset: L.point(0, -20)
                });

           // Create event to display popupText information on mouseover activity
            layer.on('mouseover', function() {
                layer.openPopup();
                });

        }       


        // create function that assign colors
        function color_hotel(d) {
        return d < 50  ? "#c7e9c0":
               d < 100 ? "#a1d99b":
               d < 150 ? "#74c476":
               d < 200 ? "#41ab5d":
               d < 250 ? "#238b45":
               d < 300 ? "#006d2c":
               d <= 1200 ? "#145A32":
                          " #A6ACAF"                               
        }     

        // create style function 
        function hotel_style(feature) {
            return {
            fillColor: color_hotel(feature.properties.price_hotel),
            weight: 2,
             opacity: 0.8,
            color: 'gray',
            fillOpacity: 1
            }
        }
      
        //  add the style and onEachFeature function to the map
        geojson = L.geoJson(nyc, {
            style: hotel_style,
            onEachFeature: hotel_eachFeature
        }).addTo(rates_hotel);
})



//AVG RATES ENTIRE HOUSE/APT
// grab the data with d3

d3.json(url5, function(data){

    //   console.log(data.length)
    //   console.log(data[0].neighbourhood)
    //   console.log(nyc.features.length)
    //   console.log(nyc.features[2].properties.neighborhood)
    
      
      for(var i = 0; i < data.length; i++) {
          for(var j=0; j < nyc.features.length; j++) {
           if(data[i].neighbourhood === nyc.features[j].properties.neighborhood) {
            //console.log(nyc[0].features[j].properties.neighbourhood)
                nyc.features[j].properties.price_entire = data[i].price;
                //console.log(data[i].price)
          };
        };
      };
    
    
        // add click event for each feature to style and show popup
        function entire_eachFeature(feature, layer) {

            // create the popup variable
            var popupHtml2 = "<b>Neighbourhood:</b> "+ feature.properties.neighborhood +  
            "," + feature.properties.borough+
            "<br><b>Average Rates (Entire Home/Apt): </b>$" + feature.properties.price_entire;

            // add the popup to the map and set location
            layer.bindPopup(popupHtml2, {
                closeButton: false,
                offset: L.point(0, -20)
                });

            // Create event to display popupText information on mouseover activity
            layer.on('mouseover', function() {
                layer.openPopup();
                });

        }       


        // create function that assign colors
    function color_entire(d) {
        return d < 50  ? "#c7e9c0":
               d < 100 ? "#a1d99b":
               d < 150 ? "#74c476":
               d < 200 ? "#41ab5d":
               d < 250 ? "#238b45":
               d < 300 ? "#006d2c":
               d <= 1200 ? "#145A32":
                          " #A6ACAF"                               
    }     

    // create style function 
    function entire_style(feature) {
      return {
          fillColor: color_entire(feature.properties.price_entire),
          weight: 2,
          opacity: 0.8,
          color: 'gray',
          fillOpacity: 1
      }
  }
      
        //  add the style and onEachFeature function to the map
        geojson = L.geoJson(nyc, {
            style: entire_style,
            onEachFeature: entire_eachFeature
        }).addTo(rates_entire);
});   

//AVG RATES PRIVATE ROOM
// grab the data with d3

d3.json(url6, function(data){

    //console.log(data.length)
    //   console.log(data[0].neighbourhood)
    //   console.log(nyc.features.length)
    //   console.log(nyc.features[2].properties.neighborhood)
    
      
      for(var i = 0; i < data.length; i++) {
          for(var j=0; j < nyc.features.length; j++) {
           if(data[i].neighbourhood === nyc.features[j].properties.neighborhood) {
            //console.log(nyc[0].features[j].properties.neighbourhood)
                nyc.features[j].properties.price_private = data[i].price;
                //console.log(data[i].price)
          };
        };
      };
    
    
        // add click event for each feature to style and show popup
        function private_eachFeature(feature, layer) {
            var popupHtml3 = "<b>Neighbourhood:</b> "+ feature.properties.neighborhood +  
            "," + feature.properties.borough+
            "<br><b>Average Rates (Private Room): </b>$" + feature.properties.price_private;

            // add the popup to the map and set location
            layer.bindPopup(popupHtml3, {
                closeButton: false,
                offset: L.point(0, -20)
                });

            // Create event to display popupText information on mouseover activity
            layer.on('mouseover', function() {
                layer.openPopup();
                });

        }       
            

        // create function that assign colors
    function color_private(d) {
        return d < 50  ? "#c7e9c0":
               d < 100 ? "#a1d99b":
               d < 150 ? "#74c476":
               d < 200 ? "#41ab5d":
               d < 250 ? "#238b45":
               d < 300 ? "#006d2c":
               d <= 1200 ? "#145A32":
                          " #A6ACAF"                               
    }     

    // create style function 
    function private_style(feature) {
      return {
          fillColor: color_private(feature.properties.price_private),
          weight: 2,
          opacity: 0.8,
          color: 'gray',
          fillOpacity: 1
      }
  }
      
        //  add the style and onEachFeature function to the map
        geojson = L.geoJson(nyc, {
            style: private_style,
            onEachFeature: private_eachFeature
        }).addTo(rates_private);
});   

//AVG RATES SHARED ROOM
// grab the data with d3

d3.json(url7, function(data){

    //   console.log(data.length)
    //   console.log(data[0].neighbourhood)
    //   console.log(nyc.features.length)
    //   console.log(nyc.features[2].properties.neighborhood)
    
      
      for(var i = 0; i < data.length; i++) {
          for(var j=0; j < nyc.features.length; j++) {
           if(data[i].neighbourhood === nyc.features[j].properties.neighborhood) {
            //console.log(nyc[0].features[j].properties.neighbourhood)
                nyc.features[j].properties.price_shared = data[i].price;
                //console.log(data[i].price)
          };
        };
      };
    
    
        // add click event for each feature to style and show popup
        function shared_eachFeature(feature, layer) {
            var popupHtml4 = "<b>Neighbourhood:</b> "+ feature.properties.neighborhood +  
            "," + feature.properties.borough+
            "<br><b>Average Rates (Shared Room): </b>$" + feature.properties.price_shared;
            //console.log(feature.properties.price_shared)

            // add the popup to the map and set location
            layer.bindPopup(popupHtml4, {
                closeButton: false,
                offset: L.point(0, -20)
                });

            // Create event to display popupText information on mouseover activity
            layer.on('mouseover', function() {
                layer.openPopup();
                });

        }       
            

        // create function that assign colors
    function color_shared(d) {
        return d < 50  ? "#c7e9c0":
               d < 100 ? "#a1d99b":
               d < 150 ? "#74c476":
               d < 200 ? "#41ab5d":
               d < 250 ? "#238b45":
               d < 300 ? "#006d2c":
               d <= 1200 ? "#145A32":
                          " #A6ACAF"                               
    }     

    // create style function 
    function shared_style(feature) {
      return {
          fillColor: color_shared(feature.properties.price_shared),
          weight: 2,
          opacity: 0.8,
          color: 'gray',
          fillOpacity: 1
      }
  }
      
        //  add the style and onEachFeature function to the map
        geojson = L.geoJson(nyc, {
            style: shared_style,
            onEachFeature: shared_eachFeature
        }).addTo(rates_shared);
});   
    

