import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { withRouter } from 'react-router';
import { Button } from 'antd';

@withRouter
class App extends React.Component {

  render() {

    return (
      <div>
        <Button type="primary">按钮</Button>
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