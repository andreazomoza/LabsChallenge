import {  DATA_LOADED , PRODUCT_DETAIL } from "../../constants/action-types";



export function getData(titulo) {
  console.log(titulo);
  return function(dispatch) {
    return fetch("http://localhost:3002/?q="+ titulo )
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
  
}

export function getProductDetail(id) {
  return function(dispatch) {
    
    const url = `http://localhost:3002/id/?q=${id}`
    console.log(url);
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: PRODUCT_DETAIL, payload: json });
        console.log(json);
      });
  }
}
