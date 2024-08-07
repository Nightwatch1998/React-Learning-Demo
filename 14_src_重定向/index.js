// 引入react核心库
import React from "react";
// 引入reactDom
import ReactDOM from "react-dom";
// 引入APP
import App from './App';

// 引入router
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);