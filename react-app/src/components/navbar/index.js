import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../auth/LoginFormModal";
import * as classes from "./navbar.module.css";

const NavBar = ({ setAuthenticated, authenticated }) => {
  let sessionLinks;
  if (!authenticated) {
    sessionLinks = (
      <>
        <nav className={classes.Main_NavBar}>
          <div>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
            <NavLink to="/spots" exact={true} activeClassName="active">
              Spots
            </NavLink>
            <LoginFormModal
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </div>
        </nav>
      </>
    );
    // ONLY for logged out users
  } else {
    sessionLinks = (
      <>
        <nav className={classes.Main_NavBar}>
          <div>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/spots" exact={true} activeClassName="active">
              Spots
            </NavLink>
            <div className={classes.spacer}></div>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </div>
        </nav>
      </>
    );
  }
  return sessionLinks;
};

export default NavBar;
