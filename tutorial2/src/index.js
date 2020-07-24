import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'


// 最後に、React DOM render() メソッドを使って、作成した App クラスを HTML のルート div にレンダリングします。
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
