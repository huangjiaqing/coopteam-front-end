import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  console.log('环境: ', process.env.NODE_ENV)

  return (
    <div>
      我是黄嘉庆哦
    </div>
  )
}

ReactDOM.render(
  <App />,
  window.document.getElementById('root')
)