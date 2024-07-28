import React, {Component} from 'react';

class Header extends Component {
  render() {
    console.log("Header组件输出的props是",this.props)
    return (
      <div>
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    );
  }
}

export default Header;