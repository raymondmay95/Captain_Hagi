import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as classes from "./spots.module.css";

function SpotsList({ loaded }) {
  const { spots } = useSelector((state) => state.spots);
  const Spots = [];
  for (let spot in spots) {
    Spots.push(spots[spot]);
  }

  if (!loaded) return null;

  return (
    <>
      <div id={classes.Outer_Container}>
        <div id={classes.Inner_Container}>
          <h1>Spots: </h1>
          <ul>
            {Spots.map((spot) => (
              <li key={spot.name}>
                <NavLink to={`/spots/${spot.id}`}>{spot.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SpotsList;
