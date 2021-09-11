import {
    GET_EMPCHARGES,
    NEW_EMPCHARGE,
    DELETE_EMPCHARGE,
  } from "../actions/type";
  const initialState = {
    items: [],
    item: []
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_EMPCHARGES:
        return {
          ...state,
          items: action.payload
        };
      case NEW_EMPCHARGE:
        return {
          ...state,
          item: action.payload
        };
        case DELETE_EMPCHARGE:
        return {
          ...state,
          item: action.payload
        };
      default:
        return state;
    }
  }
