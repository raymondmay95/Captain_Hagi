import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { removeWeatherThunk } from "../../store/weather";
// import { useHistory } from "react-router-dom"; No need to useHistory on log out because we will no prevent default event behavor!
// import { removeCOORDSThunk } from "../../store/coords"; WILL BREAK MAP
// import { removeSPOTSThunk } from "../../store/spots"; WILL BREAK MAP

const LogoutButton = ({ setAuthenticated }) => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const onLogout = (e) => {
    dispatch(logout());
    // dispatch(removeCOORDSThunk());
    // dispatch(removeSPOTSThunk());
    dispatch(removeWeatherThunk())
    setAuthenticated(false);
    alert("User has logged out");
    // history.push("/");
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
