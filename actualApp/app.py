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
from sqlalchemy import create_engine



app = Flask(__name__, template_folder='template')

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://ablekwsj:scRNnW0ztSKbX4PP5NQnVJq_uoU0iZ-O@ziggy.db.elephantsql.com:5432/ablekwsj"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
##app.config['SQLALCHEMY_DATABASE_URI'] = os.getenviron("ELEPHANT_SQL")
db = SQLAlchemy(app)
Base = automap_base()
Base.prepare(db.engine, reflect = True)

boroughs_id = Base.classes.boroughs_id
neighbourhood_id = Base.classes.neighbourhood_id
host_id = Base.classes.host_id
room_type_id = Base.classes.roomtype_id
listing = Base.classes.listing_master



## FRONT_END ROUTES
@app.route("/")
def main(): 
    return render_template("graphs.html")

## SERVICE ROUTES
# @app.route("/api/neighbourhood")
# def borough_data():
    # sel = [
    #     boroughs_id.borough_id,
    #     boroughs_id.borough,
    #     listing.price,
    # ]

    # results = db.session.query(listing,func.mean(price)).group_by(borough_id).all()


    # neighbour_dict = {
    #     "id":[result[0] for result in results],
        
    #     "price": [result[1] for result in results]
    # }
    # # jsonify the dictionary
    # return jsonify(neighbour_dict)
@app.route("/api/main")
def firstRoute():
    return jsonify(thisdict)

if __name__ == "__main__":
    app.run()(debug=True)