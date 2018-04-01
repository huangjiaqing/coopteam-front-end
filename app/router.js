import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Button, Avatar } from 'antd';

class App extends React.Component {

  render() {
    return (
      <div>
        <Button type="primary">点击获取快乐</Button>
        <Avatar icon="user"/>
      </div>
    );
  }
}

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App}/>
      <Redirect path='/' to='/org'/>
    </Switch>
  </BrowserRouter>
);

export default Router;