import {
    GET_CHARGES,
    NEW_CHARGE,
    DELETE_CHARGE,
  } from "../actions/type";
  const initialState = {
    items: [],
    item: []
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CHARGES:
        return {
          ...state,
          items: action.payload
        };
      case NEW_CHARGE:
        return {
          ...state,
          item: action.payload
        };
        case DELETE_CHARGE:
        return {
          ...state,
          item: action.payload
        };
      default:
        return state;
    }
  }