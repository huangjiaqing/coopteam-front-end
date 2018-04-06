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

const App = (props) => {
  const { match } = props;

  return (
    <Layout>
      <Switch>
        <Route path={`${match.url}org`} component={Org}/>
        <Route path={`${match.url}project/:projectId`} component={Project}/>
        <Redirect to={`${match.url}org`} />
      </Switch>
    </Layout>
  );
};

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* 注意匹配顺序 */}
      <Route exact path='/login' component={Login} />
      <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;