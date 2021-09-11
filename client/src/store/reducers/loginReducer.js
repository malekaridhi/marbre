import {LOGIN_USER,LOGOUT_USER}from "../actions/type"
const initialState = {
    user: {} 
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          user: action.payload
        };
        case LOGOUT_USER:
        return {
          ...state,
          user: action.payload
        };
      default:
        return state;
    }
  }