import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";

const LogoutButton = ({ setAuthenticated }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogout = (e) => {
    dispatch(logout());
    setAuthenticated(false);
    history.push("/");
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
