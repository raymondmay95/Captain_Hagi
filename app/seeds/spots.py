from app.models import db, Spot
from datetime import datetime

# Adds a demo user, you can add other users here if you want


def seed_spots():
   now = datetime.now()
   Ala_Moana_Oahu_Coords={
      "lat":21.281884672165216,
      "long":-157.84628167580007
   }
   Banzai_Pipe_Line_Oahu_Coords={
      "lat":21.665238345900754,
      "long":-158.0513843612509
   }
   Makapuu_Oahu_Coords={
      "lat":21.31091508152033,
      "long":-157.66002580598067
   }
   Sandys_Oahu_Coords={
      "lat":21.28561578416469,
      "long":-157.67300478038786
   }
   Waimea_Bay_Oahu_Coords={
      "lat":21.643795503389235,
      "long":-158.06469917132262
   }
   Makaha_Oahu_Coords={
      "lat":21.477556151042194,
      "long":-158.22152451838653
   }
   Lahaina_Harbor_Maui_Coords = {
      "lat":20.872440667990073,
      "long":-156.67869230607315
   }
   Honolua_Bay_Maui_Coords = {
      "lat":21.016836480215982,
      "long":-156.63949202557345
   }
   Hookipa_Beach_Park_Maui_Coords = {
      "lat":20.93262645780518,
      "long":-156.35868199227045
   }
   Oluwalu_Maui_Coords = {
      "lat":20.810273530909004,
      "long":-156.6227516087369
   }
   Windmills_Maui_Coords = {
      "lat":21.022100721890077,
      "long":-156.62550775891538
   }
   Hana_Maui_Coords = {
      "lat":20.76486252642342,
      "long":-155.98132912746115
   }
   Waiehu_Maui_Coords = {
      "lat":20.913477182277724,
      "long":-156.49117606410076
   }
   Banyons_Big_Island_Coords={
      "lat":19.606320405374255,
      "long":-155.9765657790406
   }
   Hapuna_Beach_Big_Island_Coords={
      "lat":19.98873508716576,
      "long":-155.82605701785246
   }
   Hanalei_Bay_Kauai_Coords={
      "lat":22.20372577238072,
      "long":-159.50283944597362
   }
   Ala_Moana_Oahu = Spot(long=Ala_Moana_Oahu_Coords['long'],lat=Ala_Moana_Oahu_Coords['lat'],name="Kaiser Bowls/Ala Moana Bowls",description=f"Oahu South Shore @ {Ala_Moana_Oahu_Coords['lat']},{Ala_Moana_Oahu_Coords['long']}", updated_at=now)
   Banzai_Pipe_Line_Oahu = Spot(long=Banzai_Pipe_Line_Oahu_Coords['long'],lat=Banzai_Pipe_Line_Oahu_Coords['lat'],name="Banzai Pipe Line/Ehukai Beach Park",description=f"Oahu South Shore @ {Banzai_Pipe_Line_Oahu_Coords['lat']},{Banzai_Pipe_Line_Oahu_Coords['long']}", updated_at=now)
   Makapuu_Oahu = Spot(long=Makapuu_Oahu_Coords['long'],lat=Makapuu_Oahu_Coords['lat'],name="Makapuu Beach",description=f"Oahu east Shore @ {Makapuu_Oahu_Coords['lat']},{Makapuu_Oahu_Coords['long']}", updated_at=now)
   Sandys_Oahu = Spot(long=Sandys_Oahu_Coords['long'],lat=Sandys_Oahu_Coords['lat'],name="Sandys Beach",description=f"Oahu South Shore @ {Sandys_Oahu_Coords['lat']},{Sandys_Oahu_Coords['long']}", updated_at=now)
   Waimea_Bay_Oahu = Spot(long=Waimea_Bay_Oahu_Coords['long'],lat=Waimea_Bay_Oahu_Coords['lat'],name="Waimea Bay/North Shore Indicator",description=f"Oahu North Shore @ {Waimea_Bay_Oahu_Coords['lat']},{Waimea_Bay_Oahu_Coords['long']}", updated_at=now)
   Makaha_Oahu = Spot(long=Makaha_Oahu_Coords['long'],lat=Makaha_Oahu_Coords['lat'],name="Makaha Beach Park",description=f"Oahu South Shore @ {Makaha_Oahu_Coords['lat']},{Makaha_Oahu_Coords['long']}", updated_at=now)
   Lahaina_Harbor_Maui = Spot(long=Lahaina_Harbor_Maui_Coords['long'],lat=Lahaina_Harbor_Maui_Coords['lat'],name="Lahaina Harbor/Lahaina Breakwall",description=f"Maui South Shore @ {Lahaina_Harbor_Maui_Coords['lat']},{Lahaina_Harbor_Maui_Coords['long']}", updated_at=now)
   Honolua_Bay_Maui = Spot(long=Honolua_Bay_Maui_Coords['long'],lat=Honolua_Bay_Maui_Coords['lat'],name="Honolua Bay Maui",description=f"Maui Nort-West Shore @ {Honolua_Bay_Maui_Coords['lat']},{Honolua_Bay_Maui_Coords['long']}", updated_at=now)
   Hookipa_Beach_Park_Maui = Spot(long=Hookipa_Beach_Park_Maui_Coords['long'],lat=Hookipa_Beach_Park_Maui_Coords['lat'],name="Ho'okipa Beach Park",description=f"Maui North Shore @ {Hookipa_Beach_Park_Maui_Coords['lat']},{Hookipa_Beach_Park_Maui_Coords['long']}", updated_at=now)
   Oluwalu_Maui = Spot(long=Oluwalu_Maui_Coords['long'],lat=Oluwalu_Maui_Coords['lat'],name="Oluwalu/Kihei/Lahaina",description=f"Maui South Shore @ {Oluwalu_Maui_Coords['lat']},{Oluwalu_Maui_Coords['long']}", updated_at=now)
   Windmills_Maui = Spot(long=Windmills_Maui_Coords['long'],lat=Windmills_Maui_Coords['lat'],name="Windmills",description=f"Maui North Shore @ {Windmills_Maui_Coords['lat']},{Windmills_Maui_Coords['long']}", updated_at=now)
   Hana_Maui = Spot(long=Hana_Maui_Coords['long'],lat=Hana_Maui_Coords['lat'],name="Hana Maui Region",description=f"Maui East Shore @ {Hana_Maui_Coords['lat']},{Hana_Maui_Coords['long']}", updated_at=now)
   Waiehu_Maui = Spot(long=Waiehu_Maui_Coords['long'],lat=Waiehu_Maui_Coords['lat'],name="Sandpiles/Churches/River Mouth/Big Lefts/Big Rights",description=f"Maui North Shore @ {Waiehu_Maui_Coords['lat']},{Waiehu_Maui_Coords['long']}", updated_at=now)
   Banyons_Big_Island = Spot(long=Banyons_Big_Island_Coords['long'],lat=Banyons_Big_Island_Coords['lat'],name="Banyons Beach",description=f"Big Island South Shore @ {Banyons_Big_Island_Coords['lat']},{Banyons_Big_Island_Coords['long']}", updated_at=now)
   Hapuna_Beach_Big_Island = Spot(long=Hapuna_Beach_Big_Island_Coords['long'],lat=Hapuna_Beach_Big_Island_Coords['lat'],name="Hapuna Beach",description=f"Big Island North Shore @ {Hapuna_Beach_Big_Island_Coords['lat']},{Hapuna_Beach_Big_Island_Coords['long']}", updated_at=now)
   Hanalei_Bay_Kauai = Spot(long=Hanalei_Bay_Kauai_Coords['long'],lat=Hanalei_Bay_Kauai_Coords['lat'],name="Hanalei Bay/Pinetrees",description=f"Kauai North Shore @ {Hanalei_Bay_Kauai_Coords['lat']},{Hanalei_Bay_Kauai_Coords['long']}", updated_at=now)

   oahu = [Ala_Moana_Oahu,Banzai_Pipe_Line_Oahu,Makapuu_Oahu,Sandys_Oahu,Waimea_Bay_Oahu,Makaha_Oahu]
   maui = [Lahaina_Harbor_Maui,Honolua_Bay_Maui,Hookipa_Beach_Park_Maui,Oluwalu_Maui,Windmills_Maui,Hana_Maui,Waiehu_Maui]
   big_island = [Banyons_Big_Island,Hapuna_Beach_Big_Island]
   kauai = [Hanalei_Bay_Kauai]

   db.session.add_all(oahu)
   db.session.add_all(maui)
   db.session.add_all(big_island)
   db.session.add_all(kauai)
   db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_spots():
   db.session.execute('TRUNCATE spots CASCADE;')
   db.session.commit()
