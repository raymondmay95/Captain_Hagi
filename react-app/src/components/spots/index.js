import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SpotsList({ loaded }) {
  const { spots } = useSelector((state) => state.spots);
  const Spots = [];
  for (let spot in spots) {
    Spots.push(spots[spot]);
  }

  if (!loaded) return null;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Spots: </h1>
        <ul>
          {Spots.map((spot) => (
            <li key={spot.name}>
              <NavLink to={`/spots/${spot.id}`}>{spot.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SpotsList;
