import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import NavBar from "./components/navbar";
import Home from "./components/home";
import User from "./components/User";
import SpotsList from "./components/spots";
import Spot from "./components/spot_page";

// import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import UploadPicture from "./components/aws_photo";

import { restoreSession } from "./store/session";
import { setCOORDSThunk } from "./store/coords";
import { setSPOTSThunk } from "./store/spots";
import { setWeatherThunk } from "./store/weather";

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loadedCoords, setLoadedCoords] = useState(false);
  const [coords, setCoords] = useState(null);

  // eslint-disable-next-line

  useEffect(() => {
    async function getCoords() {
      const success = async (position) => {
        const { latitude, longitude } = await position.coords;
        let new_obj = { latitude, longitude };
        dispatch(setCOORDSThunk(new_obj));
        setLoadedCoords((loaded) => !loaded);
        setCoords(new_obj);
      };
      navigator.geolocation.getCurrentPosition(success, (e) => console.log(e));
    }
    return getCoords();
  }, [dispatch]);

  useEffect(() => {
    function setUp() {
      if (coords) {
        dispatch(setWeatherThunk(coords));
      }
      dispatch(restoreSession());
      dispatch(setSPOTSThunk());
      setLoaded(true);
    }
    setUp();
  }, [dispatch, coords]);

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
          <Home
            setAuthenticated={setAuthenticated}
            authenticated={authenticated}
          />
        </Route>
        <ProtectedRoute path="/spots/:id" authenticated={authenticated}>
          <Spot />
        </ProtectedRoute>
        <Route path="/sign-up" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <ProtectedRoute
          path="/spots"
          exact={true}
          authenticated={authenticated}
        >
          <SpotsList loaded={loaded} />
        </ProtectedRoute>
        <Route path="/spots" exact={true}>
          <Home
            loaded={loaded}
            setAuthenticated={setAuthenticated}
            authenticated={authenticated}
          />
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
