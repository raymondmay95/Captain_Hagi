from .db import db
# from sqlalchemy import select
# from .spot import Spot

class MyAWS(db.Model):
  __tablename__ = 'aws'

  id = db.Column(db.Integer, primary_key = True)
  rss_feed_url = db.Column(db.Text(), nullable= False)
  aws_url = db.Column(db.Text(), nullable= False)
  spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"))
  spot = db.relationship("Spot", back_populates="aws")
  comments = db.relationship("MyAWS", back_populates="aws")


  def to_dict(self):
    return {
      "id": self.id,
      "rss": self.rss_feed_url,
      "aws": self.aws_url,
      "spotId": self.spot_id
    }
