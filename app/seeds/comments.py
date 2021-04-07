from app.models import db, Comment

# Adds a demo user, you can add other users here if you want
def seed_comments():

   comments = [
      Comment(user_id=2, spot_id=1, comment="Small southerly swell at the 1 - 2 foot range."),
      Comment(user_id=2, spot_id=2, comment="Large northly swell at 10 - 12 feet. Small Craft Advisor is in affect for the area."),
      Comment(user_id=2, spot_id=3, comment="Large northly swell at 10 - 12 feet. Small Craft Advisor is in affect for the area."),
      Comment(user_id=2, spot_id=4, comment="Mix of easterly and southeasterly windswell topping out at 3 - 4 feet."),
      Comment(user_id=2, spot_id=5, comment="Large northly swell at 10 - 12 feet. Small Craft Advisor is in affect for the area."),
      Comment(user_id=2, spot_id=6, comment="Small southerly swell at the 1 - 2 foot range."),
      Comment(user_id=2, spot_id=7, comment="Large northly swell at 10 - 12 feet. Small Craft Advisor is in affect for the area."),
      Comment(user_id=2, spot_id=8, comment="Large northly swell at 10 - 12 feet. Small Craft Advisor is in affect for the area."),
      Comment(user_id=2, spot_id=9, comment="Small southerly swell at the 1 - 2 foot range."),
      Comment(user_id=2, spot_id=10, comment="Large northly swell at 10 - 12 feet. Small Craft Advisor is in affect for the area."),
      Comment(user_id=2, spot_id=11, comment="Large northly swell at 10 - 12 feet. Small Craft Advisor is in affect for the area."),
      Comment(user_id=2, spot_id=12, comment="Large northly swell at 10 - 12 feet. Small Craft Advisor is in affect for the area."),
      Comment(user_id=2, spot_id=13, comment="Large northly swell at 10 - 12 feet. Small Craft Advisor is in affect for the area."),
      Comment(user_id=2, spot_id=14, comment="Small southerly swell at the 1 - 2 foot range."),
      Comment(user_id=2, spot_id=15, comment="Large northly swell at 10 - 12 feet. Small Craft Advisor is in affect for the area."),
      Comment(user_id=2, spot_id=16, comment="Large northly swell at 10 - 12 feet. Small Craft Advisor is in affect for the area."),
   ]

   db.session.add_all(comments)

   db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_comments():
   db.session.execute('TRUNCATE comments CASCADE;')
   db.session.commit()
