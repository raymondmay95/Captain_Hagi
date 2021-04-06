from .db import db
# from sqlalchemy import select
# from .spot import Spot

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key = True)
  comment  = db.Column(db.Text(), nullable= False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"))
  aws_id = db.Column(db.Integer, db.ForeignKey("aws.id"), nullable=True)
  user = db.relationship("User")
  spots = db.relationship("Spot")
  url = db.relationship("MyAWS")


  def to_dict(self):
    return {
      "id": self.id,
      "comment": self.comment,
      "meta_data": self.user_id,
      "aws": self.aws_id
    }
