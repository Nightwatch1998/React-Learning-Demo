import React, {Component} from 'react';
import Detail from "./Detail";
import {Link, Route} from "react-router-dom";

class Message extends Component {
  state = {
    messageArr: [
      {id:"01",title:"消息1"},
      {id:"02",title:"消息2"},
      {id:"03",title:"消息3"},
    ]
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(msgObj=>{
              return (
                <li key={msgObj.id}>
                  {/*像路由组件传递params参数*/}
                  {/*<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;*/}
                  
                  {/*像路由组件传递search参数*/}
                  {/*<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;*/}
                  
                  {/*像路由组件传递state参数*/}
                  <Link to={{pathname:"/home/message/detail",state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/*声明接受params参数*/}
        {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}
        
        {/*声明接受search参数*/}
        {/*<Route path="/home/message/detail" component={Detail}/>*/}
        
        {/*无需声明接受search参数*/}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    );
  }
}

export default Message;