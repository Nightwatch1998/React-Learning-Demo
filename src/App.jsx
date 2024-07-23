import React, {Component} from 'react';
import "./components/List/index.css";
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {
  // 初始化状态
  state = {
    users: [], // 用户数据
    isFirst: true, // 是否第一次打开页面
    isLoading: false, // 是否处于加载中
    err: "", // 存储请求相关的错误信息
  }
  
  // 更新app的state
  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }
  
  // 保存用户
  saveUsers = (users)=>{
    this.setState({users})
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}></Search>
        <List {...this.state}></List>
      </div>
    );
  }
}

export default App;