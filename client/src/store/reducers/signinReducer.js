import {CREATE_USER} from "../actions/type"
const initialState = {
    user: {} 
  
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case CREATE_USER:
        return {
          ...state,
          user: action.payload
        };
      default:
        return state;
    }
  }