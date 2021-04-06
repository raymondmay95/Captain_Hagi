from flask import Blueprint, jsonify
from app.models import Comment

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/')
def allComments():
   commentsArray = Comment.query.all()
   if (not commentsArray): return jsonify({"Comments_By_Spot":[]})
   comments = []
   while len(commentsArray):
      comment = commentsArray.pop()
      comments.append(comment.to_dict())

   return jsonify({"Comments":comments})


@comment_routes.route('/spot/<int:id>')
def commentsBySpot(id):
   commentsArray = Comment.query.filter(Comment.spot_id == id).all()
   if (not commentsArray): return jsonify({"Comments_By_Spot":[]})
   comments = []
   while len(commentsArray):
      comment = commentsArray.pop()
      comments.append(comment.to_dict())
   return jsonify({"Comments_By_Spot":comments})


@comment_routes.route('/<int:id>')
def comment(id):
    comment = Comment.query.get(id)
    if (not comment): return jsonify({"Comment":[]})
    return {"Comment": comment.to_dict()}
