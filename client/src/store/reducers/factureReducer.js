import {
    GET_FACTURES,
    NEW_FACTURE,
    DELETE_FACTURE,
    ONE_FACTURE,
  } from "../actions/type";
  const initialState = {
    items: [],
    item:[],
    
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_FACTURES:
        return {
          ...state,
          items: action.payload
        };
      case NEW_FACTURE:
        return {
          ...state,
          item: action.payload
        };
        case DELETE_FACTURE:
        return {
          ...state,
          item: action.payload
        };
        case ONE_FACTURE:
        return {
          ...state,
          item: action.payload
        };
      default:
        return state;
    }
  }
