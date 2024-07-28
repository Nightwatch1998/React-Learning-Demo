import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header a={1}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*原生html，靠<a>跳转不同页面*/}
              {/*<a className="list-group-item" href="./about.html">About</a>*/}
              {/*<a className="list-group-item active" href="./home.html">Home</a>*/}
              
              {/*在React中靠路由链接实现切换组件*/}
              {/*<NavLink activeClassName="rong" className="list-group-item" to="/about">About</NavLink>*/}
              {/*<NavLink activeClassName="rong" className="list-group-item" to="/home">Home</NavLink>*/}
              
              {/*使用自己封装的导航栏*/}
              <MyNavLink to="/about" a={1} b={2} c={3}>About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*注册路由*/}
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;