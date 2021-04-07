from flask import Blueprint, jsonify
from app.models import Spot

spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/')
def spots():
    allspots = Spot.query.all()
    allSpots = []
    while len(allspots):
        spot = allspots.pop()
        allSpots.append(spot.to_dict())

    return jsonify({"Spots":allSpots})


@spot_routes.route('/<int:id>')
def spot(id):
    location = Spot.query.get(id)
    data=location.to_dict()
    return data


@spot_routes.route('/location/<int:id>')
def spotLocation(id):
    spot = Spot.query.get(id)
    data = spot.to_dict()
    return data["location"]
