import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import NavBar from "./components/navbar";
import Home from "./components/home";
import User from "./components/User";
import UsersList from "./components/UsersList";

import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";

import { restoreSession } from "./store/session";
import { setCOORDSThunk } from "./store/coords";

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loadedCoords, setLoadedCoords] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitue] = useState(null);
  let map;

  // eslint-disable-next-line
  function initMap() {
    map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 10,
    });
  }
  useEffect(() => {
    async function getCoords() {
      const success = async (position) => {
        const { latitude, longitude } = await position.coords;
        let new_obj = { latitude, longitude };
        setLatitude(latitude);
        setLongitue(longitude);
        return dispatch(setCOORDSThunk(new_obj)).then(() =>
          setLoadedCoords(true)
        );
      };
      navigator.geolocation.getCurrentPosition(success, (e) => console.log(e));
      if (loadedCoords) initMap();
    }
    return getCoords();
  }, [dispatch, loadedCoords, initMap]);

  useEffect(() => {
    async function setUp() {
      await dispatch(restoreSession());
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
      <div id="map"></div>
      {!authenticated ? <h1>Time to Log in</h1> : null}
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <ProtectedRoute
          path="/users"
          exact={true}
          authenticated={authenticated}
        >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <h1>Let's Surf</h1>
          <Home />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
