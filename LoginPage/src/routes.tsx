import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';

function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/homepage" component={Homepage}/>
    </Switch>
    </BrowserRouter>
  )
}


export default Routes