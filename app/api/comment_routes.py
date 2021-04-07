from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Comment, Spot, db

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


@comment_routes.route('/spot/<int:id>', methods=['POST'])
@login_required
def commentsBySpotPost(id):
   print(request.form)
   if "comment" not in request.form:
      print('not in form')
      return {"errors":"comment required"}, 400
   comment = request.form["comment"]
   new_comment = Comment(comment=comment,user_id=current_user.id,spot_id=id)
   db.session.add(new_comment)
   db.session.commit()
   return {"Comment":comment}
