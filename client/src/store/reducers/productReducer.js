import {
    GET_PRODUCTS,
    NEW_PRODUCT,
    DELETE_PRODUCT,
    ONE_PRODUCTS
  } from "../actions/type";
  const initialState = {
    items: [],
    item: []
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUCTS:
        return {
          ...state,
          items: action.payload
        };
      case NEW_PRODUCT:
        return {
          ...state,
          item: action.payload
        };
        case DELETE_PRODUCT:
        return {
          ...state,
          item: action.payload
        };
        case ONE_PRODUCTS:
        return {
          ...state,
          item: action.payload
        };
      default:
        return state;
    }
  }
