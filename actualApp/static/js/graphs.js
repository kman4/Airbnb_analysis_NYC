 
const url = "/api/borough"

//PLOT FUNCTION - Display h-bar & bubble charts by ID
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


// PLOT BAR Trace1 for Top 15 For Most Reviewed
var tracebar = {
x: neighbourhood,
y:  reviews,
type:"bar"
}


//Apply the group bar mode to the layout
var layout1 = {
margin: {
      l: 100,
      r: 80,
      t: 90,
      b: 75
    },
height: 600,
title: "Top 15 Neighbourhood that are Most Reviewed",
  };
  

// PLOT BUBBLE CHART for the Sample Values for all the OTU_ID under each ID
var tracebubble={
x: superhost_area,
y: superhost,
text: superhost_area,
mode: "markers",
marker: {
  size: superhost
  }
};

//data to display for trace 2
var data3=[tracebubble]

var layout3 = {
title: 'Top 5 Neighbourhood with the Most Superhost Listings',
height: 1000
}

//Render the plots to the div tag with id "plot"
Plotly.newPlot("bubble", data3, layout3);

//data to display for trace 1
var data1 = [tracebar];

Plotly.newPlot("bar", data1, layout1);

 // create pie chart
 var tracePie = {
  labels: roomtype_list,
  values: roomvalue_list,
  type:"pie",
}

var data = [tracePie]
var layout = {
  
  title: "Roomtype Distribution"
        };

Plotly.newPlot("pie", data, layout)

// PLOT Line graph for rates in 2017-2021
var traceline = {
  x: year_list,
  y: rates_list,
  type:"lines",
  mode: "lines"
}

//Apply the group bar mode to the layout
var layout2 = {
  xaxis:{title: "Years", showgrid: false},  
  yaxis:{title: "Rates", showgrid: false},  
  title: "Average Rates by Year"
        };

var data2 = [traceline]

Plotly.newPlot("line", data2, layout2)

});    

}

function DropDown(){
  //Retreive JSON data to be used to extract information
  d3.json(url).then(function(data){


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