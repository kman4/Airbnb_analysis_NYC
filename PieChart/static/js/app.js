//PLOT FUNCTION - Display h-bar & bubble charts by ID
function BuildPlots(borough) {

  //Retreive JSON data to be used to extract information
  d3.json("roomtype_boroughs.json").then((data)=> {console.log(data)

    //Retreive the sample dataset
    var sample_data = data.roomdata;
    console.log(sample_data)

    //Filter sample data by borough
    var samples_filter = sample_data.filter(object => object.borough == borough);
    var samples= samples_filter[0]
      
    //Retrieve the otu_ids, sample_values, and otu_labels list from filtered id
    var borough_list = samples.borough;
    var roomtype_list = samples.room_type;
    var roomvalue_list = samples.Room_Type_Values;
  
    
 // create pie chart
 var tracePie = {
  labels: roomtype_list,
  values: roomvalue_list,
  type:"pie",
}

var data = [tracePie]


Plotly.newPlot("pie", data)

});    
}

function DropDown(){
  //Retreive JSON data to be used to extract information
  d3.json("roomtype_boroughs.json").then((data)=> {

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

//Call the BuildPlots & MetaData function and display the visuals/demographics info from the first id
BuildPlots(boroughs[0]);
});
};

 //Create the function for the change event
function optionChanged(borough) {
  BuildPlots(borough);
}

//Call DropDown() Function
DropDown();