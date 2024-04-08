import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Store } from '../pages/store.jsx';


export const Content = () => {
    return (
        <Switch> 
            <Route exact path='/' component={ Store } />
           
        </Switch>
    );
}

export default Content

/*
import { Login } from '../pages/login.jsx'; 
import { GamePage } from '../pages/gamepage.jsx';
import { Cadastro } from '../pages/cadastro.jsx';
<Route path='/login' component={ Login } /> 
<Route path='/gamepage' component={ GamePage }/>
<Route path='/cadastro' component={ Cadastro }/>*/