import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://u0983jf093:093840934if@something.elephantsql.com/jwirefu094"

postgres://mydtrkxm:nAf-2CH3VOp1XIKf35ifKzRIYwl6vuvy@ziggy.db.elephantsql.com:5432/mydtrkxm
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