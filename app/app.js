import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

const App = () => {
  console.log('环境: ', process.env.NODE_ENV);

  return (
    <div>
      <Button type="primary">我是黄嘉庆哦</Button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  window.document.getElementById('root')
);