import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenviron("ELEPHANT_SQL")

db = SQLAlchemy(app)



## FRONT_END ROUTES
@app.route("/")
def main(): 
    return render_template("index.html")


## SERVICE ROUTES
@app.route("/api/main/torontocovidcases")
def firstRoute(): 
    data = db.session.query(Cases.City, Cases.Count).filter(Cases.city =="Toronto").all()
    return jsonify(data)

if __name__ == "__main__":
    app.run()