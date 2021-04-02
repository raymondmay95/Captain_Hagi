from .db import db

Spot_join_User = db.Table(
    "spot_join_user",
    db.Column("user_id", db.INTEGER, db.ForeignKey("users.id"), primary_key=True),
    db.Column("spot_id", db.INTEGER, db.ForeignKey("spots.id"), primary_key=True),
)

class Spot(db.Model):
  __tablename__ = 'spots'

  id = db.Column(db.Integer, primary_key = True)
  long = db.Column(db.NUMERIC(7,4))
  lat = db.Column(db.NUMERIC(7,4))
  name = db.Column(db.String(255), nullable = False, unique = True)
  image = db.Column(db.String(255))
  description = db.Column(db.Text(), nullable = False)
  updated_at = db.Column(db.DateTime(), nullable=False) #get to this later
  aws = db.relationship("MyAWS", back_populates="spot")
  user = db.relationship(
    "User",
    secondary=Spot_join_User,
    back_populates="spots"
  )

  @property
  def image(self):
    return self.image


  @image.setter
  def setImage(self, url):
    self.image = str(url)

  @property
  def location(self):
    return {"location": {long:self.long, lat:self.lat}}

  @location.setter
  def setLocation(self, longitude, latitude):
     self.long = longitude
     self.lat = latitude

  def to_dict(self):
    return {
      "id": self.id,
      "location": {"long":self.long,"lat":self.lat},
      "name": self.name,
      "image": self.image,
      "description": self.description,
      "updatedAt": self.updated_at
    }
