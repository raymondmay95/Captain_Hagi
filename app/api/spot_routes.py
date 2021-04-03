from flask import Blueprint, jsonify
from app.models import Spot

spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/')
def spots():
    allspots = Spot.query.all()
    for spot in allspots:
        print(spot)
    return {"spots":allspots} #! error is here


@spot_routes.route('/<int:id>')
def spot(id):
    location = Spot.query.get(id)
    return jsonify({location.to_dict()})
