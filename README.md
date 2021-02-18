# Airbnb Analysis - New York City
![Image](https://www.newyorkhotels.org//img_new/top_banner2.png)

## Background

The purpose of this project is to conduct a thorough analysis of the New York City Airbnb listings in 2021.  We must obtain datasets from external sources, perform an analysis with interactive visualizations and deploy this in a Heroku app.  

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

## Scripts

* [Database](https://github.com/kman4/Airbnb_analysis_NYC/tree/master/actualApp/data/Database)
* [JSON Files](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/actualApp/data/JSON/Jsonify.ipynb)
* [Flask App](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/actualApp/app.py)
* [Javascript/CSS](https://github.com/kman4/Airbnb_analysis_NYC/tree/master/actualApp/static)
* [HTML](https://github.com/kman4/Airbnb_analysis_NYC/tree/master/actualApp/template)

## Heroku Application
[https://airbnbanalysis2021myflaskapp.herokuapp.com/](https://airbnbanalysis2021myflaskapp.herokuapp.com/)

## Data Visualizations

### Neighbourhood Analysis with Maps

* **Airbnb Listing Details**

![Image](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/Images/Marker%20Cluster.png)

The marker cluster map shows the number of listing within the different boroughs and neighbourhoods in New York City.  As you zoom in the map, the number circle spreads out and you will see blue markers where the exact listing is locating.  You can click on the blue marker and find the infomration of that specific listing.  You can even click on "More info" and it will direct you to the Airbnb link to that specific listing.


**Airbnb Rates by Neighbourhood and Room Types**

![Image](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/Images/Chropleth.png)

The choropleth map enables the user to see the map in different views by choosing either the light, dark or stret view.  Then the user can choose to view the rates in different layers by choosing to view rates by neighbourhood, entire home/apartment, hotel room, private room or shared room.

### Borough Analysis with Graphs

The analysis allows the use the drop down menu to get Airbnb information for the 5 borough in New York City.

**Total # Listed Neighbourhoods, Total # Listings, and Total # of Reviews**
![Image](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/Images/Indicators.png)

**Rates by Year**

![Image](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/Images/Line.png)

**Room Type Distribution**

![Image](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/Images/Pie.png)

**15 Neighbourhoods that are Most Reviewed**

![Image](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/Images/Bar.png)

**Top 5 Neighbourhoods with the Most Superhost Listings**

![Image](https://github.com/kman4/Airbnb_analysis_NYC/blob/master/Images/Bubble.png)


## Results
* The average rates have been lower in 2019-2021 compared to 2017-2018.
* Average Rates for private and shared room are significantly lower than enitre home/apt and hotel rooms.
* Manhattan has the highest average rates and as you go further out from Manhanttan, the prices from the other boroughs are significantly lower.
* Almost 85% of the listings are in Brooklyn and Manhattan.
* Over 90% of the Airbnb listigns are an Entire home/apartment and Private Rooms.
* There are more listing and room type options towards the Brooklyn Bridge that links up Manhattan and Brooklyn.
* The neighbourhood that is most reviewed and has the most superhosts is Bedford-Stuyvesant in Brooklyn.

## Team Members 
**Caitlain Beachey** - HTML Developer <br>
**Amaris Hassan** - Data Research Specialist and Presenter<br>
**Cecilia Leung** - Data Visualizations Specialist<br>
**Hillary Mandich** - Project Coordinator<br>
**Kapil Pundhir** - ETL Specialist and Web Quality Assurance<br>


