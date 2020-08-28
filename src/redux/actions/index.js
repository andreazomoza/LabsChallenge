import {  DATA_LOADED } from "../../constants/action-types";



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
