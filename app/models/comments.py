from .db import db
# from sqlalchemy import select
# from .spot import Spot

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key = True)
  comment  = db.Column(db.Text(), nullable= False)
  aws_meta_data = db.Column(db.Integer, db.ForeignKey("aws.id"))
   users_spot_meta = db.relationship(
    "Comment",
    secondary=Spot_join_User,
  )
  aws = db.relationship("Comment", back_populates="comments")


  def to_dict(self):
    return {
      "id": self.id,
      "comment": self.rss_feed_url,
      "meta_data": self.users_spot_meta,
      "aws": self.aws_meta_data
    }
