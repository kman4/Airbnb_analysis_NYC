import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func



app = Flask(__name__, template_folder='template')

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://ablekwsj:scRNnW0ztSKbX4PP5NQnVJq_uoU0iZ-O@ziggy.db.elephantsql.com:5432/ablekwsj"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
##app.config['SQLALCHEMY_DATABASE_URI'] = os.getenviron("ELEPHANT_SQL")
##db = SQLAlchemy(app)
##Base = automap_base()
#Base.prepare(db.engine, reflect = True)

##boroughs_id = Base.classes.boroughs_id
##neighbourhood_id = Base.classes.neighbourhood_id
##host_id = Base.classes.host_id
##room_type_id = Base.classes.roomtype_id
##listing = Base.classes.listing_master

borough_dict = {
    "boroughs":["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"], "roomdata":[{"borough": "Bronx", "room_type": ["Entire home/apt", "Hotel Room", "Private Room", "Shared Room"], "room_Type_Values": [348, 1, 558, 30], 
        "neighbourhood":["Concourse","Allerton", "Mott Haven","Wakefield", "Williamsburg","Longwood", "Port Morris", "Parkchester", "Highbridge", "Throgs Neck", "Pelham Gardens", "University Heights", "Kingsbridge", "Woodlawn", "Norwood"],
        "top_reviews":[2150,2024, 1905, 1827, 1460, 1350, 1114, 1074, 911, 909, 861, 827, 750, 704, 632], "years":["2017", "2018", "2019", "2020", "2021"], "rates":[78, 75, 82, 88, 83], "superhost_area":["Wakefield", "Claremont", "Williamsburg", "Concourse", "Mott Haven"],"superhost_value":[28, 16, 14, 12, 12], "total_neighbourhoods": 49, "total_listings": 937, "total_reviews": 28303},
        {"borough": "Brooklyn", "room_type": ["Entire home/apt", "Hotel Room", "Private Room", "Shared Room"], "room_Type_Values": [7202, 17, 7001, 219], "neighbourhood":["Bedford-Stuyvesant","Williamsburg","Bushwick","Crown Heights","Greenpoint","Clinton Hill","East Flatbush", "Flatbush", "Park Slope", "Prospect-Lefferts Gardens", "Prospects Heights", "Fort Greene", "South Slope", "Sunset Park", "East New York"],
        "top_reviews":[84320, 56473, 34206, 27131, 12430, 11385, 11275, 11062, 10895, 10318, 9184, 8321, 7957, 7646, 6348], "years":["2017", "2018", "2019", "2020", "2021"], "rates":[140, 141, 125, 127, 127], "superhost_area":["Bedford-Stuyvesant","Williamsburg","Bushwick","Crown Heights","Greenpoint"],"superhost_value":[601, 436, 308, 234, 125], "total_neighbourhoods": 48, "total_listings": 14439, "total_reviews": 368528}, 
        {"borough": "Manhattan", "room_type": ["Entire home/apt", "Hotel Room", "Private Room", "Shared Room"], "room_Type_Values": [10135, 270, 5948, 289], "neighbourhood":["Harlem", "Hell's Kitchen", "East Village", "Upper West Side", "East Harlem", "Upper East Side", "Chelsea", "Midtown", "Lower East Side", "Washington Heights", "West Village", "Soho", "Theater District", "Chinatown", "Financial District"],
        "top_reviews":[55439, 33227, 30461, 25423, 22373, 19986, 17622, 15063, 14791, 12593, 11644, 6853, 6055, 5367, 4812],"years":["2017", "2018", "2019", "2020", "2021"], "rates":[198, 226, 188, 202, 184],"superhost_area":["Harlem", "Hell's Kitchen", "East Village", "Upper West Side", "East Village"],"superhost_value":[486, 216, 212, 199, 180],"total_neighbourhoods": 32, "total_listings": 16642, "total_reviews": 315373},
        {"borough": "Queens", "room_type": ["Entire home/apt", "Hotel Room", "Private Room", "Shared Room"], "room_Type_Values": [1641, 9, 2841, 138], "neighbourhood":["Astoria","Flushing","East Elmhurst","Jamaica","Long Island City","Jackson Heights","Sunnyside","Ditmars Steinway","Ridgewood","Springfield Gardens","Woodside","Elmhurst","St.Albans", "Maspeth", "Queens Village"],
        "top_reviews":[16909, 14466, 10589, 9034, 7896, 6159, 5999, 5666, 5557, 4971, 4341, 3831, 2736, 2518, 2410],"years":["2017", "2018", "2019", "2020", "2021"], "rates":[111, 107, 103, 105, 115], "superhost_area":["Astoria","Flushing","Long Island City", "Woodside", "Jamaica"],"superhost_value":[136, 109, 79, 62, 60],"total_neighbourhoods": 53, "total_listings": 4629, "total_reviews": 133022},
        {"borough": "Staten Island", "room_type": ["Entire home/apt","Private Room", "Shared Room"], "room_Type_Values": [144, 130, 2],"neighbourhood":["St. George","Tompkinsville","Arrochar", "West Brighton","Clifton","Randall Manor","Concord","New Brighton","Castleton Corners", "Eltingville", "Mariners Harbor", "New Dorp Beach", "Silver Lake", "Huguenot", "Grymes Hill"],
        "top_reviews":[2498, 1900, 612, 565, 489, 395, 351, 308, 290, 274, 247, 240, 212, 211, 206], "years":["2017", "2018", "2019", "2020", "2021"], "rates":[86, 101, 95, 99, 101], "superhose_area":["St. George","Tompkinsville","West Brighton", "Randall Manor","Concord"],"superhost_value":[24, 17, 7, 6, 6],"total_neighbourhoods": 48, "total_listings": 276, "total_reviews": 10734}]}

## FRONT_END ROUTES
@app.route("/")
def main(): 
    return render_template("index.html")

## VIEW ROUTES
## FRONT_END ROUTES
@app.route("/graphs")
def graphs(): 
    return render_template("graphs.html")

##SERVICE ROUTES
@app.route("/api/borough")
def borough_data():
    return jsonify(borough_dict)

# ##SERVICE ROUTES
# @app.route("/api/graph_dict")
# def graph_data():
#     return jsonify(graph_dict)


#Define main behavior
if __name__ == "__main__":
    app.run(debug=True)