import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import * as classes from "./loginform.module.css";
import { NavLink } from "react-router-dom";

const LoginForm = ({ authenticated, setAuthenticated, setShowModal }) => {
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

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.Outer_Container}>
      <form onSubmit={onLogin}>
        <p>Please Log In!</p>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <label htmlFor="email">Email</label>
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <span>
          <button type="submit">Login</button>
        </span>
      </form>
      <div>
        <NavLink to="/sign-up" onClick={() => setShowModal(false)}>
          Sign Up here
        </NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
