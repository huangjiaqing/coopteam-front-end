import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from 'components/layout';
import Org from 'routes/org';
import Project from 'routes/project';
import Login from 'routes/login';

const App = () => {

  return (
    <Layout>
      <Switch>
        <Route exact path='/org' component={Org}/>
        <Route exact path='/project/:projectId' component={Project}/>
        <Redirect path='/' to='/org'/>
      </Switch>
    </Layout>
  );
};

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Router;