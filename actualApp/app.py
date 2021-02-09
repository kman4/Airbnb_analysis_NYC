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

dictionary = {"boroughs":["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"]}


## FRONT_END ROUTES
@app.route("/")
def main(): 
    return render_template("index.html")

##SERVICE ROUTES
@app.route("/api/borough")
def borough_data():
    return jsonify(dictionary)


if __name__ == "__main__":
    app.run()(debug=True)