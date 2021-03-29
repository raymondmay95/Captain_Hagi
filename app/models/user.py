from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .spot import Spot_join_User


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  display_name = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  profile_url = db.Column(db.String(255))
  spots = db.relationship(
    "Spot",
    secondary=Spot_join_User,
    back_populates="user"
  )

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)

  @property
  def photo(self):
    return self.profile_url

  @photo.setter
  def setPhoto(self, photo_url):
    self.profile_url = photo_url

  def to_dict(self):
    return {
      "id": self.id,
      "displayName": self.display_name,
      "email": self.email,
      "photo": self.profile_url
    }
