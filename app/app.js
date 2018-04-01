import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { AppContainer } from 'react-hot-loader';

function render(Component) {
  if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      window.document.getElementById('root')
    );
  } else {
    ReactDOM.render(
      <Component />,
      window.document.getElementById('root')
    );
  }
}

render(Router)

if (module.hot) {
  module.hot.accept(['./router'], () => {
    const next = require('./router').default
    render(next)
  })
}