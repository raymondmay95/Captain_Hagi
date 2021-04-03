from flask import Blueprint, jsonify
from app.models import Spot

spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/')
def spots():
    allspots = Spot.query.all()
        # allSpots[spot] = spot
    #! error is here
    allSpots = []
    i = int(len(allspots)-1)
    while i > 0:
        i = i - 1
        allSpots.append(allspots[i])
        print(allSpots)

    return jsonify({"Spots":[spot.to_dict() for spot in allSpots]})


@spot_routes.route('/<int:id>')
def spot(id):
    location = Spot.query.get(id)
    data=location.to_dict()
    return data
