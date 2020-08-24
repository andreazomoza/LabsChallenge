import {  DATA_LOADED , PRODUCT_DETAIL } from "../../constants/action-types";

const initialState = {
  products: [],
  productsLoaded: [],
  productDetail: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    case DATA_LOADED:
      return {
        ...state,
        productsLoaded: action.payload
      };
    case PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload
      };
    default:
      return state
  }
}

export default rootReducer;
