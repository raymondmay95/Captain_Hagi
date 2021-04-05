import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import { ModalProvider } from "./components/ModalProvider";
import "./index.css";
import App from "./App";
import * as session from "./store/session";
import * as coords from "./store/coords";
import * as spots from "./store/spots";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.session = session;
  window.coords = coords;
  window.spots = spots;
}

const Root = () => {
  return (
    <Provider store={store} session={session} coords={coords} spots={spots}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
