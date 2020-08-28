import {  DATA_LOADED } from "../../constants/action-types";

const initialState = {
  
  productsLoaded: [],
  
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    case DATA_LOADED:
      return {
        ...state,
        productsLoaded: action.payload
      };
    
    default:
      return state
  }
}

export default rootReducer;
