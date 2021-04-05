import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import NavBar from "./components/navbar";
import Home from "./components/home";
import User from "./components/User";
import SpotsList from "./components/spots";

// import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import UploadPicture from "./components/aws_photo";

import { restoreSession } from "./store/session";
import { setCOORDSThunk } from "./store/coords";
import { setSPOTSThunk } from "./store/spots";

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loadedCoords, setLoadedCoords] = useState(false);

  // eslint-disable-next-line

  useEffect(() => {
    async function getCoords() {
      const success = async (position) => {
        const { latitude, longitude } = await position.coords;
        let new_obj = { latitude, longitude };
        dispatch(setCOORDSThunk(new_obj));
        setLoadedCoords(true);
      };
      navigator.geolocation.getCurrentPosition(success, (e) => console.log(e));
    }
    return getCoords();
  }, [dispatch]);

  useEffect(() => {
    function setUp() {
      dispatch(restoreSession());
      dispatch(setSPOTSThunk());
      setLoaded(true);
    }
    setUp();
  }, [dispatch]);

  if (!loaded && !loadedCoords) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar
        setAuthenticated={setAuthenticated}
        authenticated={authenticated}
      />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/spots/:id">
          <p>create me</p>
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/spots" exact={true}>
          <SpotsList />
        </Route>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <Home />
          <UploadPicture />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
