from flask import Blueprint, jsonify
from app.models import Spot

spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/')
def spots():
    spots = Spot.query.all()
    return {"spots": [spot.to_dict() for spot in spots]}


@spot_routes.route('/<int:id>')
def spot(id):
    spot = Spot.query.get(id)
    return spot.to_dict()
