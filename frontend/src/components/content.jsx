import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Store from '../pages/store.jsx';
import Login from '../pages/login.jsx'; 
import GamePage from '../pages/gamepage.jsx';
import Cadastro from '../pages/cadastro.jsx';
import Cart from '../pages/cart.jsx';

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Store }  path="/" exact />
           <Route component = { Login }  path="/login" />
           <Route component = { GamePage }  path="/gamepage" />
           <Route component = { Cadastro }  path="/cadastro" />
           <Route component = { Cart }  path="/cart" />
       </BrowserRouter>
   )
}

export default Routes