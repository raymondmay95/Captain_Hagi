import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../services/auth";
import * as classes from "./loginform.module.css";
import { NavLink } from "react-router-dom";

const LoginForm = ({ authenticated, setAuthenticated, setShowModal }) => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    const user = await login("demo@aa.io", "demo");
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  if (authenticated) {
    history.push("/");
  }

  return (
    <>
      <span className={classes.Title}>
        <h3>Please Log In!</h3>
      </span>
      <div className={classes.FormBody}>
        <form onSubmit={onLogin} className={classes.Form}>
          <div className={classes.Errors}>
            {errors.length ? (
              errors.map((error) => <div id={classes.red}>{` ${error} `}</div>)
            ) : (
              <div>
                By logging into "Captain Hagi" you are consenting to sharing
                your location with this site and affiliates.
              </div>
            )}
          </div>
          <ul className={classes.Items}>
            <li key="Form.Email">
              <label htmlFor="email">Email</label>
              <div className={classes.InputFields_Container}>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={updateEmail}
                  className={classes.TextField}
                />
              </div>
            </li>
            <li key="Form.Password">
              <label htmlFor="password">Password</label>
              <div className={classes.InputFields_Container}>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={updatePassword}
                  className={classes.TextField}
                />
              </div>
            </li>
            <span className={classes.Buttons}>
              <button type="submit">Login</button>
              <button type="submit" onClick={handleDemo} id={classes.Demo}>
                Demo
              </button>
            </span>
          </ul>
        </form>
        <div className={classes.SignUp}>
          <NavLink to="/sign-up" onClick={() => setShowModal(false)}>
            Sign Up here
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
