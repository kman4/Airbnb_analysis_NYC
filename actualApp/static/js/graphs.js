 // JSON DATA ROUTE
const url = "/api/borough"

//PLOT FUNCTION - Display indicators, line graph, pie chart, bar graph and bubble chart by borough
function BuildPlots(borough) {

  //Retreive JSON data to be used to extract information
d3.json(url).then(function(data){

    //Retreive the sample dataset
    var sample_data = data.roomdata;
    //console.log(sample_data)

    //Filter sample data by first brough on the list
    var samples_filter = sample_data.filter(object => object.borough == borough);
    var samples= samples_filter[0]
      
    //Retrieve the required datalists for the plots
    var roomtype_list = samples.room_type;
    var roomvalue_list = samples.room_Type_Values;
    var neighbourhood_list = samples.neighbourhood;
    var reviews_list = samples.top_reviews;
    var year_list = samples.years;
    var rates_list = samples.rates
    var reviews = reviews_list.slice(0, 15)
    var neighbourhood =  neighbourhood_list.slice(0, 15)
    var superhost = samples.superhost_value
    var superhost_area = samples.superhost_area
    var total_neighbourhood = samples.total_neighbourhoods
    var total_listings = samples.total_listings
    var total_reviews = samples.total_reviews

// INDICATOR
// Build the indicators & its layout on the top row for the # of neighbourhoods
var data_n = [
  {
    type: "indicator",
    mode: "number",
    gauge: { shape: "bullet" },
    value: total_neighbourhood,
    domain: { x: [0, 1], y: [0, 1] },
    title: { text: "<b># of Neighbourhoods</b>" }
  }
];
var layout_a = { width: 450, height: 250 };

// Plot neighbourhood indicator
Plotly.newPlot('neighbourhood', data_n, layout_a);

// Build the indicators & its layout on the top row for the # of listings
var data_l = [
  {
    type: "indicator",
    mode: "number",
    gauge: { shape: "bullet" },
    value: total_listings,
    domain: { x: [0, 1], y: [0, 1] },
    title: { text: "<b># of Listings</b>" }
  }
];
Plotly.newPlot('listing', data_l, layout_a);

// Build the indicators & its layout on the top row for the # of reviews
var data_r = [
  {
    type: "indicator",
    mode: "number",
    gauge: { shape: "bullet" },
    value: total_reviews,
    domain: { x: [0, 1], y: [0, 1] },
    title: { text: "<b>Total Reviews</b>"}
  }
];
Plotly.newPlot('review', data_r, layout_a);

// LINE GRAPH
// Build line graph on average rates from 2017-2021
var traceline = {
  x: year_list,
  y: rates_list,
  type:"lines",
  mode: "lines"
}

// data to display for line graph
var data1 = [traceline]

// Apply line graph layout
var layout1 = {
  xaxis:{title: "Years", showgrid: false},  
  yaxis:{title: "Rates", showgrid: false},  
  title: "<b>Average Rates by Year</b>"
        };

// Plot line graph in the line div
Plotly.newPlot("line", data1, layout1)

// PIE CHART
// create pie chart for distribution of room types for each borough
var tracePie = {
  labels: roomtype_list,
  values: roomvalue_list,
  type:"pie",
}
// data to display for pie chart
var data2 = [tracePie]

// create layout for pie chart
var layout2 = {
  title: "<b>Roomtype Distribution<b>"
        };

// Plot line graph in the pie div
Plotly.newPlot("pie", data2, layout2)

// BAR GRAPH
// PLOT for Top 15 For Most Reviewed
var tracebar = {
x: neighbourhood,
y: reviews,
type:"bar"
}

// data to display for bar graph
var data3 = [tracebar];

//Apply the layout for the bar graph
var layout3 = {
margin: {
      l: 100,
      r: 80,
      t: 90,
      b: 75
    },
height: 600,
title: "<b>Top 15 Neighbourhood that are Most Reviewed</b>",
  };


// Plot line graph in the bar div
Plotly.newPlot("bar", data3, layout3);


// BUBBLE CHART
// Build a bubble chart with the top 5 superhosts by neighbourhood
var tracebubble={
x: superhost_area,
y: superhost,
text: superhost_area,
mode: "markers",
marker: {
  size: superhost
  }
};

// data to display for bubble chart
var data4=[tracebubble]

//Apply the layout for the bar graph
var layout4 = {
title: '<b>Top 5 Neighbourhood with the Most Superhost Listings</b>',
height: 1000
}

// Plot bubble chart in the bar div
Plotly.newPlot("bubble", data4, layout4);

});    

}

// DROP DOWN MENU
// Create a drop down menu for user to choose the plots by borough

function DropDown(){
  //Retreive JSON data to be used to extract information
d3.json(url).then(function(data) {


    //Retreive id values in name list to create an array for the dropdown menu
    var boroughs = data.boroughs;
    //Display names list 
    //console.log(names)

    //Select the dropdown menu into html file
    var select = document.getElementById("selDataset");

      //Loop through each item in the name list to add in the dropdown menu
      for (i=0; i< boroughs.length; i++)
      {
        //Create a new div element
        var option = document.createElement("OPTION");
  
        //Give some content to the element
        var id = document.createTextNode(boroughs[i]);
  
        //Add the text node to the newly created div
        option.appendChild(id);
  
        //Set value in name list
        option.setAttribute("value",boroughs[i]);
  
        //Insert the id names into the dropdown menu
        select.insertBefore(option, select.lastChild);
      };
  
  //Call the BuildPlots function and display the airbnb info from the first borough on the dropdownlist
  BuildPlots(boroughs[0]);
  });
  };
  

 //Create the function for the change event
function optionChanged(borough) {
  BuildPlots(borough);
}

//Call DropDown() Function
DropDown();