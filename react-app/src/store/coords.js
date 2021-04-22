//vars
const SET_COORDS = "coords/SET_COORDS";
const REMOVE_COORDS = "coords/REMOVE_COORDS";
// const REMOVE_WEATHER = "weather/REMOVE_WEATHER";

//actions
const setCOORDS = (coords) => ({
  type: SET_COORDS,
  payload: coords,
});

const removeCOORDS = () => ({
  type: REMOVE_COORDS,
  payload: null,
});
//thunk-actions
export const setCOORDSThunk = (data) => async (dispatch, getState) => {
  const { latitude, longitude } = await data;
  dispatch(setCOORDS({ latitude, longitude }));
  return data;
};

export const removeCOORDSThunk = (data) => async (dispatch) => {
  dispatch(removeCOORDS());
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
    case REMOVE_COORDS:
      return action.payload;
    default:
      return state;
  }
}
