//vars
const SET_SPOTS = "spotss/SET_SPOTS";
// const REMOVE_WEATHER = "weather/REMOVE_WEATHER";

//actions
const setSpots = (spots) => ({
  type: SET_SPOTS,
  payload: spots,
});
//thunk-actions
export const setSPOTSThunk = () => async (dispatch, getState) => {
  const response = await fetch("/api/spots/");
  const responseData = await response.json();
  const { Spots } = responseData;
  dispatch(setSpots(Spots));
  return Spots;
};
//reducers
const initialState = { spots: {} };
export default function spotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPOTS:
      return { spots: action.payload };
    default:
      return state;
  }
}
