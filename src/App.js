import React from "react";

import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";

import ProductCard from "./components/ProductCard/ProductCard";



function App() {

  
  
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Buscador} />
          
          <Route path="/product/:id" component={ProductCard} />
      </React.Fragment>
  );
}

export default App;
