import {
    GET_CLIENTS,
    NEW_CLIENT,
    DELETE_CLIENT,
  } from "../actions/type";
  const initialState = {
    items: [],
    item: []
   
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CLIENTS:
        return {
          ...state,
          items: action.payload
        };
      case NEW_CLIENT:
        return {
          ...state,
          item: action.payload
        };
        case DELETE_CLIENT:
        return {
          ...state,
          item: action.payload
        };
      default:
        return state;
    }
  }
