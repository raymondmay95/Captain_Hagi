const SET_ALERTS = "alerts/SETALERTS";

const alerts = (data) => ({
  type: SET_ALERTS,
  payload: data,
});

export const alertsTHUNK = (data) => async (dispatch) => {
  let response = await fetch(
    `https://api.weather.gov/alerts/active?area=${data}`
  );
  if (response.ok) {
    let data = response.json;
    dispatch(alerts(data));
  }
};

export default function alertsReducer(initialState = [], action) {
  switch (action.type) {
    case SET_ALERTS:
      let state = [...initialState, ...action.payload];
      return state;
    default:
      return initialState;
  }
}
