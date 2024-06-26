import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Store from '../pages/store.jsx';
import Login from '../pages/login.jsx'; 
import GamePage from '../pages/gamepage.jsx';
import Cadastro from '../pages/cadastro.jsx';
import Cart from '../pages/cart.jsx';
import Header from "./header.jsx";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Store }  path="/" exact />
           <Route component = { Login }  path="/login" />
           <Route component = { GamePage }  path="/gamepage/:id" />
           <Route component = { Cadastro }  path="/cadastro" />
           <Route component = { Cart }  path="/cart" />
           <Route component = { Header }  path="/header" />
       </BrowserRouter>
   )
}

export default Routes