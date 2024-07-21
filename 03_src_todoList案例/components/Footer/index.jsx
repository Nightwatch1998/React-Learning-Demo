import React, {Component} from 'react';
import PropTypes from "prop-types";
import './index.css'
class Footer extends Component {
  static propTypes = {
    clearTodo: PropTypes.func.isRequired,
    checkAllTodo: PropTypes.func.isRequired
  }
  // 清除已完成任务的
  handleClearDone = ()=>{
    this.props.clearTodo()
  }
  
  // 全选
  handleCheckAll = (event)=>{
    const checked = event.target.checked
    this.props.checkAllTodo(checked)
  }
  
  render() {
    const {todos} = this.props
    // 计算已完成的个数
    const doneCount = todos.reduce((pre,todo)=>{
      return todo.done ? pre + 1 : pre
    },0)
    // 计算总数
    const sumCount = todos.length
    
    return (
      <div className="todo-footer">
        <label>
          {/*defaultChecked只在第一次运行起作用*/}
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === sumCount && doneCount !== 0}/>
        </label>
        <span>
              <span>已完成{doneCount}</span> / 全部{sumCount}
            </span>
        <button onClick={this.handleClearDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}

export default Footer;