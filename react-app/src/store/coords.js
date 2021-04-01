//vars
const SET_COORDS = "coords/SET_COORDS";
// const REMOVE_WEATHER = "weather/REMOVE_WEATHER";

//actions
const setCOORDS = (coords) => ({
  type: SET_COORDS,
  payload: coords,
});
//thunk-actions
export const setCOORDSThunk = (data) => async (dispatch, getState) => {
  const { latitude, longitude } = await data;
  dispatch(setCOORDS({ latitude, longitude }));
  return data;
};
//reducers
const initialState = { coords: {} };
export default function coordsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COORDS:
      const new_obj = state;
      new_obj.coords = action.payload;
      return new_obj;
    default:
      return state;
  }
}
