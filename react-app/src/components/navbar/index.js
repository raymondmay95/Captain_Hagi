import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import * as classes from "./navbar.module.css";

const NavBar = ({ setAuthenticated, authenticated }) => {
  let sessionLinks;
  if (!authenticated) {
    sessionLinks = (
      <>
        <nav className={classes.Main_NavBar}>
          <ul className={classes.navbar_ul}>
            <li className={classes.navbar_li}>
              <NavLink to="/" exact={true} activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className={classes.navbar_li}>
              <NavLink to="/login" exact={true} activeClassName="active">
                Login
              </NavLink>
            </li>
            <li className={classes.navbar_li}>
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
            </li>
            <li className={classes.navbar_li}>
              <NavLink to="/users" exact={true} activeClassName="active">
                Users
              </NavLink>
            </li>
            <li className={classes.navbar_logout}>
              <LogoutButton setAuthenticated={setAuthenticated} />
            </li>
          </ul>
        </nav>
      </>
    );
    // ONLY for logged out users
  } else {
    sessionLinks = (
      <>
        <nav className={classes.Main_NavBar}>
          <ul className={classes.navbar_ul}>
            <li className={classes.navbar_li}>
              <NavLink to="/" exact={true} activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className={classes.navbar_li}>
              <NavLink to="/users" exact={true} activeClassName="active">
                Users
              </NavLink>
            </li>
            <li className={classes.navbar_logout}>
              <LogoutButton setAuthenticated={setAuthenticated} />
            </li>
          </ul>
        </nav>
      </>
    );
  }
  return sessionLinks;
};

export default NavBar;
