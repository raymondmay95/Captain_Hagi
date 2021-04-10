import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signUp } from "../../services/auth";
import * as classes from "./signup.module.css";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // to change styles
  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.Outer_Container}>
      <div className={classes.body}>
        {/* <div className={classes.second_Square}></div>
        <div className={classes.third_Square}></div>
        <div className={classes.fourth_Square}></div>
        <div className={classes.fifth_Square}></div> */}
        <div className={classes.Form_Container}>
          <form className={classes.SignUpForm} onSubmit={onSignUp}>
            <div className={classes.InnerFormBackground}>
              <label htmlFor="username">User Name</label>
              <div>
                <input
                  className={classes.InputFields}
                  type="text"
                  name="username"
                  placeholder="User Name"
                  onChange={updateUsername}
                  value={username}
                ></input>
              </div>
              <label htmlFor="email">Email</label>
              <div>
                <input
                  className={classes.InputFields}
                  type="text"
                  name="email"
                  placeholder="Email@example.com"
                  onChange={updateEmail}
                  value={email}
                ></input>
              </div>
              <label htmlFor="password">Password</label>
              <div>
                <input
                  className={classes.InputFields}
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={updatePassword}
                  value={password}
                ></input>
              </div>
              <label htmlFor="repeat_password">Repeat Password</label>
              <div>
                <input
                  className={classes.InputFields}
                  type="password"
                  name="repeat_password"
                  placeholder="password"
                  onChange={updateRepeatPassword}
                  value={repeatPassword}
                  required={true}
                ></input>
              </div>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
