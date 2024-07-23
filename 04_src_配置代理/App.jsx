import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
  getStudentData = ()=>{
    axios.get('http://localhost:3000/api1/students').then(
      res=>{
        console.log('成功了',res.data)
      },
      err=>{
        console.log('失败了')
      }
    )
  }
  
  getCarData = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(
      res=>{
        console.log('成功了',res.data)
      },
      err=>{
        console.log('失败了')
      }
    )
  }
  
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    );
  }
}

export default App;