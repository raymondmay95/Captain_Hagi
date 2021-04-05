import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function SpotsList() {
  const [allSpots, setAllSpots] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/spots/");
      const responseData = await response.json();
      const { Spots } = responseData;
      setAllSpots(Spots);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Spots: </h1>
      <ul>
        {allSpots.map((spot) => {
          return (
            <li>
              <NavLink to={`spots/${spot.id}`}>{spot.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SpotsList;
