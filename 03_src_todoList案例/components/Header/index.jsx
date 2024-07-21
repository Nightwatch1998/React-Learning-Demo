import React, {Component} from 'react';
import PropTypes from "prop-types";
import {nanoid} from 'nanoid';
import './index.css'

class Header extends Component {
  // 对接收的props进行限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  
  // 键盘抬起事件
  handleKeyUp = (event)=>{
    const { addTodo } = this.props
    const { target, keyCode } = event
    // 判断是否是回车按键
    if(target.value.trim() === ""){
      return
    }
    if( keyCode!==13 ) return
    let obj = {id:nanoid(),name:target.value,done:false}
    addTodo(obj)
    target.value = ""
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    );
  }
}

export default Header;