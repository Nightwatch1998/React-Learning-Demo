import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true
      },
      {
        id: '002',
        name: '睡觉',
        done: true
      },
      {
        id: '003',
        name: '打豆豆',
        done: false
      },
      {
        id: '004',
        name: '逛街',
        done: false
      },
    ]
  }
  
  // 用于添加一个todo
  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({
      todos: newTodos
    })
  }
  
  // 用于更改一个TODO
  updateTodo = (id,done)=>{
    // 获取状态中的TODO
    const {todos} = this.state
    // 更改指定的item
    const newTodos = todos.map(todo=>{
      if(todo.id === id){
        return {...todo,done}
      }else{
        return todo
      }
    })
    this.setState({
      todos: newTodos
    })
  }
  
  // 用于删除一个todo
  deleteTodo = (id)=>{
    // 获取todos
    const {todos} = this.state
    // 删除指定数组的todo对象
    const newTodos  = todos.filter(todo=> todo.id!==id );
    this.setState({
      todos: newTodos
    })
  }
  
  // 清除已完成todo
  clearTodo = ()=>{
    // 获取todos
    const { todos} = this.state
    const newTodos =  todos.filter(todo=> !todo.done)
    this.setState({
      todos: newTodos
    })
  }
  
  // 用于全选
  checkAllTodo = (checked)=>{
    // 获取原来的todos
    const {todos} = this.state
    // 加工数据
    const newTodos =  todos.map(todo=>{
      return {...todo,done:checked}
    })
    this.setState({
      todos: newTodos
    })
  }
  
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} clearTodo={this.clearTodo} checkAllTodo={this.checkAllTodo}/>
        </div>
      </div>
    );
  }
}

export default App;