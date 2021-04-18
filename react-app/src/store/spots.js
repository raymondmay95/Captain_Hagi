//vars
const SET_SPOTS = "spots/SET_SPOTS";
const REMOVE_SPOTS = "spots/REMOVE_SPOTS";
//actions
const setSpots = (spots) => ({
  type: SET_SPOTS,
  payload: spots,
});
const removeSpots = (spots) => ({
  type: REMOVE_SPOTS,
  payload: null,
});
//thunk-actions
export const setSPOTSThunk = () => async (dispatch, getState) => {
  const response = await fetch("/api/spots/");
  const responseData = await response.json();
  const { Spots } = responseData;
  dispatch(setSpots(Spots));
  return Spots;
};

export const removeSPOTSThunk = () => async (dispatch) => {
  dispatch(removeSpots());
};
//reducers
const initialState = { spots: {} };
export default function spotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPOTS:
      return { spots: action.payload };
    case REMOVE_SPOTS:
      return { spots: action.payload };
    default:
      return state;
  }
}
