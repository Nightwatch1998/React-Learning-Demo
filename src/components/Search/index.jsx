import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
  handleSearch = ()=>{
    // 获取用户的输入(联系解构赋值+重命名)
    const {keyWordNode: {value:keyword}} = this
    
    // 发送请求前通知App更新状态
    this.props.updateAppState({
      isFirst: false,
      isLoading: true
    })
    
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      response =>{
        // 请求成功后通知app更新状态
        this.props.updateAppState({
          users: response.data.items,
          isLoading: false
        })
      },
      error=>{
        // 请求失败了
        this.props.updateAppState({
          isLoading: false,
          err: error.message
        })
      }
    )
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