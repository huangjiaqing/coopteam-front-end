import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Org from 'routes/org';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Org}/>
      <Redirect path='/' to='/org'/>
    </Switch>
  </BrowserRouter>
);

export default Router;