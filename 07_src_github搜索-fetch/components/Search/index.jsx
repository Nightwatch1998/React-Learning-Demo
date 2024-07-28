import React, {Component} from 'react';
import PubSub from 'pubsub-js';

class Search extends Component {
  handleSearch = async ()=>{
    // 获取用户的输入(联系解构赋值+重命名)
    const {keyWordNode: {value:keyword}} = this

    // 发送请求前通知List更新状态
    PubSub.publish('rong',{isFirst:false,isLoading:true})
    
    // 发送网络请求
    // axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
    //   response =>{
    //     // 请求成功后通知List更新状态
    //     PubSub.publish('rong',{
    //       users: response.data.items,
    //       isLoading: false
    //     })
    //   },
    //   error=>{
    //     // 请求失败了
    //     PubSub.publish('rong',{
    //       isLoading: false,
    //       err: error.message
    //     })
    //   }
    // )
    
    // fetch发送网络请求 未优化
    // fetch(`https://api.github.com/search/users?q=${keyword}`).then(
    //   res=>{
    //     console.log("联系服务器成功了");
    //     return res.json();
    //   },
    //   // err => {
    //   //   console.log("联系服务器失败了",err)
    //   //   return new Promise();
    //   // }
    // ).then(
    //   res => {
    //     console.log("获取数据成功了",res)
    //   },
    //   // err => {
    //   //   console.log("获取数据失败了",err)
    //   // }
    // ).catch(
    //   err => {
    //     console.log(err)
    //   }
    // )
    
    
    // fetch(`https://api.github.com/search/users?q=${keyword}`).then(
    //   res=>{
    //     console.log("联系服务器成功了");
    //     return res.json();
    //   }
    // ).then(
    //   res => {
    //     console.log("获取数据成功了",res)
    //   }
    // ).catch(
    //   err => {
    //     console.log("请求出错",err)
    //   }
    // )
    
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${keyword}`);
      const data = await response.json();
      // 请求成功后通知List更新状态
      PubSub.publish('rong',{
        users: data.items,
        isLoading: false
      })
    }catch (err){
      // 请求失败了
      PubSub.publish('rong',{
        isLoading: false,
        err: err.message
      })
    }
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input ref={(c=>{this.keyWordNode = c})} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
          <button onClick={this.handleSearch}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;