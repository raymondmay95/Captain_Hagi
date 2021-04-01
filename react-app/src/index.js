import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import "./index.css";
import App from "./App";
import * as session from "./store/session";
import * as coords from "./store/coords";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.session = session;
  window.coords = coords;
}

const Root = () => (
  <Provider store={store} session={session} coords={coords}>
    <App />
  </Provider>
);
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
