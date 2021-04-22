import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session.js";
import coordsReducer from "./coords.js";
import spotsReducer from "./spots.js";
import weatherReducer from "./weather.js";
import alertsReducer from "./alerts.js";

const rootReducer = combineReducers({
  session: sessionReducer,
  coords: coordsReducer,
  spots: spotsReducer,
  weather: weatherReducer,
  alerts: alertsReducer,
});

let enhancer;
if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
