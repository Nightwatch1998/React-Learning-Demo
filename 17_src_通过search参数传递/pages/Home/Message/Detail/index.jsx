import React, {Component} from 'react';
import qs from 'qs'

// urlencoded
// let obj = {name:'tom',age:18}
// console.log(qs.stringify(obj))
// let str = 'carName=奔驰&price=199'
// console.log(qs.parse(str))

const data = [
  {id:"01",content:"你好，中国"},
  {id:"02",content:"你好，Rong"},
  {id:"03",content:"你好，未来的自己"}
]

class Retail extends Component {
  render() {
    // 接收search参数
    const {search} = this.props.location
    const {id,title} = qs.parse(search.slice(1))
    // const {id, title} = this.props.match.params
    const findResult = data.find(msg=>msg.id === id);
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}

export default Retail;