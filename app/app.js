import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import * as rootStore from 'store';
import { Provider } from 'mobx-react';

function render(Component) {
  if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(
      <Provider {...rootStore}>
        <Component />
      </Provider>,
      window.document.getElementById('root')
    );
  } else {
    ReactDOM.render(
      <Component />,
      window.document.getElementById('root')
    );
  }
}

render(Router);

if (module.hot) {
  module.hot.accept(['./router'], () => {
    const next = require('./router').default;
    render(next);
  });
}