import React, {Component} from 'react';

const data = [
  {id:"01",content:"你好，中国"},
  {id:"02",content:"你好，Rong"},
  {id:"03",content:"你好，未来的自己"}
]

class Retail extends Component {
  render() {
    const {id, title} = this.props.match.params
    const findResult = data.find(msg=>msg.id == id);
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