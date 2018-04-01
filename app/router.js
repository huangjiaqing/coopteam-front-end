import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Button } from 'antd';

const App = () => {
  // console.log('环境: ', process.env.NODE_ENV);

  return (
    <div>
      <Button type="primary">我庆哥哥的</Button>
    </div>
  );
};

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App}/>
      <Redirect path='/' to='/org'/>
    </Switch>
  </BrowserRouter>
);

export default Router;