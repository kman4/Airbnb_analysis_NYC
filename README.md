# Airbnb Analysis - New York City
![Image](https://www.newyorkhotels.org//img_new/top_banner2.png)

## Background

The purpose of this project is to conduct a thorough analysis of the New York City Airbnb listings in 2021.  We must obtain datasets from external sources, perform an analysis fwith interactive visualizations and deploy this in a Heroku app.  


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

## Heroku Application
[https://airbnbanalysis2021myflaskapp.herokuapp.com/](https://airbnbanalysis2021myflaskapp.herokuapp.com/)

## Analysis

[**Dashboard**](https://airbnbanalysis2021myflaskapp.herokuapp.com/)
* Provides links of various graphs for different boroughs
 
* Choropleth map for Rates by Neighbourhood & Room Type
* Marker Cluster map that shows all the listings in New York City
  
[**Interactive**](https://airbnbanalysis2021myflaskapp.herokuapp.com/interactive)
  * Choropleth map that provides Rates by Neighbourhood & Room Type
  * This can be view in Gray Scale, Dark Scale and Street Mode settings.
  * Toggle between the different layers of average rates by neighbourhood, entire home/apt, hotel room, private room and shared room.

[**Graphs**](https://airbnbanalysis2021myflaskapp.herokuapp.com/graphs)
  * Provides a dropdown menu to see information for each borough:
    * Total # of Neighbourhoods Listed
    * Total # of Listing
    * Total # of Reviews
    * Rates 2017-2021
    * Room Type Distribution
    * Top 15 Neighbourhoods
    * Top 5 Superhosts


## Team Members 
**Caitlain Beachey** - HTML Developer <br>
**Amaris Hassan** - Data Research Specialist and Presenter<br>
**Cecilia Leung** - Data Visualizations Specialist<br>
**Hillary Mandich** - Project Coordinator<br>
**Kapil Pundhir** - ETL Specialist and Web Quality Assurance<br>
