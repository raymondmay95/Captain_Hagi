const SET_ALERTS = "alerts/SET_ALERTS";

const setAlerts = (data) => ({
  type: SET_ALERTS,
  payload: data,
});

export const alertsTHUNK = (data) => async (dispatch) => {
  let response = await fetch(
    `https://api.weather.gov/alerts/active?area=${data}`
  );
  if (response.ok) {
    let data = await response.json();
    let { features } = data;
    dispatch(setAlerts(data));
    if (features && features.length) {
      features.map(async (singleAlert) => {
        let response = await fetch(`${singleAlert.id}`);
        if (response.ok) {
          let data = await response.json();
          let secondrespons = await fetch(data.id);
          if (secondrespons.ok) {
            let { properties } = await secondrespons.json();
            data.features = properties.description;
            dispatch(setAlerts(data));
            return data;
          } else {
            return data;
          }
        } else return 404;
      });
    }
    return data;
  } else {
    dispatch(setAlerts({ errors: response.status }));
  }
};

export default function alertsReducer(state = {}, action) {
  switch (action.type) {
    case SET_ALERTS:
      return action.payload;
    default:
      return state;
  }
}
