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

const App = () => {

  return (
    <Layout>
      <Switch>
        <Route path='/org' component={Org}/>
        <Route exact path='/project/:projectId' component={Project}/>
        <Redirect path='/' to='/org'/>
      </Switch>
    </Layout>
  );
};

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App}/>
    </Switch>
  </BrowserRouter>
);

export default Router;