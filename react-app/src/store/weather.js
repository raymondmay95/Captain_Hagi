const SET_WEATHER = "weather/SET_WEATHER";
const REMOVE_WEATHER = "weather/REMOVE_WEATHER";

//actions
const setWeather = (weather) => ({
  type: SET_WEATHER,
  payload: weather,
});

const removeWeather = () => ({
  type: REMOVE_WEATHER,
  payload: null,
});

//thunks
export const setWeatherThunk = (coords) => async (dispatch, getState) => {
  const response = await fetch(
    `https://api.weather.gov/points/${coords.latitude},${coords.longitude}`
  );
  if (response.ok) {
    const { properties } = await response.json();
    const { forecast } = properties;
    const data = await fetch(forecast);
    if (data.ok) {
      let weather = await data.json();
      dispatch(setWeather(weather));
      return weather;
    }
    return properties;
  }
  return response.status;
};

export const removeWeatherThunk = () => async (dispatch) => {
  dispatch(removeWeather());
  return;
};

//reducer
const initialState = { weather: null };
export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEATHER:
      return action.payload;
    case REMOVE_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
