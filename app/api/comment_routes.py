from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
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


@comment_routes.route('/spot/<int:id>', methods=['POST'])
@login_required
def commentsBySpotPost(id):
   print("__________________________________________________________________")
   print(request.form)
   if "comment" not in request.form:
      return {"errors":["comment required", "failed to post comment"]}, 400
   if "userId" not in request.body.userId:
      return {"errors":["user needs to be logged in", "failed to post comment"]}, 400
   if "spotId" not in request.body.spotId:
      return {"errors":["comment has no location (spot)", "failed to post comment"]}, 400
   if request.body["userId"] != current_user["id"]:
      return {"errors":[f"couldn't handle users request {request.body.userId} is not eqaul too {current_user.id}"]}, 400
   if request.body["spotId"] != id:
      return {"errors":[f"couldn't handle comment request {request.body.spotId} is not eqaul too {id}"]}, 400
   comment = request.form["comment"]
   new_comment = Comment(comment=comment,user_id=current_user.id,spot_id=id)
   db.session.add(new_comment)
   db.session.commit()
   return jsonify({"Comment":comment})
