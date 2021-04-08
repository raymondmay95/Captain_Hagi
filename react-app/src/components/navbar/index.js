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
          <ul className={classes.navbar_ul}>
            <li className={classes.navbar_li} key="NavHome">
              <NavLink to="/" exact={true} activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className={classes.navbar_li} key="NavSignUp">
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
            </li>
            <li className={classes.navbar_li} key="NavSpots">
              <NavLink to="/spots" exact={true} activeClassName="active">
                Spots
              </NavLink>
            </li>
            <li className={classes.navbar_login} key="NavLogIn">
              <LoginFormModal
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
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
            <li className={classes.navbar_logout}>
              <LogoutButton setAuthenticated={setAuthenticated} />
            </li>
            <li className={classes.navbar_li}>
              <NavLink to="/spots" exact={true} activeClassName="active">
                Spots
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
  return sessionLinks;
};

export default NavBar;
