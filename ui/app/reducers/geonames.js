import types from "../actions";

const initialState = {
  fetching: false,
  fetched: false,
  geonames: [],
  error: null
};

export default function geonames(state = initialState, action) {
  switch (action.type) {
    case types.FETCHING_GEONAMES:
      return { fetching: true, fetched: false, geonames: [], error: null };

    case types.RECEIVED_GEONAMES:
      return {
        fetching: false,
        fetched: true,
        geonames: action.geonames,
        error: null
      };

    case types.FETCH_GEONAMES_ERROR:
      return {
        fetching: false,
        fetched: false,
        geonames: [],
        error: action.error
      };

    default:
      return state;
  }
}
