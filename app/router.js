import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from 'components/Layout';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Layout}/>
      <Redirect path='/' to='/org'/>
    </Switch>
  </BrowserRouter>
);

export default Router;