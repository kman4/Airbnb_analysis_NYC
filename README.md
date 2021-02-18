# Airbnb Analysis - New York City
![Image](https://www.newyorkhotels.org//img_new/top_banner2.png)

## Background

The purpose of this project is to conduct a thorough analysis of the New York City Airbnb listings in 2021.  We must obtain datasets from external sources, perform an analysis fwith interactive visualizations and deploy this in a Heroku app.  

## Team Members 
**Caitlain Beachey** - HTML Developer <br>
**Amaris Hassan** - Data Research Specialist and Presenter<br>
**Cecilia Leung** - Data Visualizations Specialist<br>
**Hillary Mandich** - Project Coordinator<br>
**Kapil Pundhir** - ETL Specialist and Web Quality Assurance<br>

## Questions

1.  What are the different types of properties in NYC?
2.  Does property type availability vary by neighbourhood?
3.  What neighbourhoods in NYC are rated highly by guests?
4.  How do prices of listings vary by location?
5.  How has the demand for Airbnb rentals evolved from over time?

## Datasets

Get the Data - Inside Airbnb - [http://insideairbnb.com/get-the-data.html](http://insideairbnb.com/get-the-data.html)

## Requirements

* Conduct ETL process so the data gets loaded into PostgreSQL Database.
* Jsonify Data using Pandas by connecting to the PostgreSQL Database.
* Create Flask App with different routes to capture viewing pages and json routes. 
* Using javascript and html to create visualizations from Airbnb Datasets using Plotly, Leaflet, and Bootstrap.
* Deploy the flask app to heroku.

## Data Visualizations

### Neighbourhood Analysis with Maps

**Airbnb Listing Details**

![Image](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/Images/Marker%20Cluster.png)

The marker cluster map shows the number of listing within the different boroughs and neighbourhoods in New York City.  As you zoom in the map, the number circle spreads out and you will see blue markers where the exact listing is locating.  You can click on the blue marker and find the infomration of that specific listing.  You can even click on "More info" and it will direct you to the Airbnb link to that specific listing.


**Airbnb Rates by Neighbourhood and Room Types**

![Image](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/Images/Chropleth.png)

The choropleth map enables the user to see the map in different views by choosing either the light, dark or stret view.  Then the user can choose to view the rates in different layers by choosing to view rates by neighbourhood, entire home/apartment, hotel room, private room or shared room.

### Borough Analysis with Graphs

The analysis allows the use the drop down menu to get Airbnb information for the 5 borough in New York City.

![Image](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/Images/InkedDropdown_LI.jpg)

**Total # Listed Neighbourhoods, Total # Listings, and Total # of Reviews**
![Image](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/Images/Indicators.png)

