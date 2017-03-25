import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {
  render(){
    return(
      <div>
        <Link to='/'>Home</Link>
        <Link to='/new-cat'>新建分类</Link>
      </div>
    )
  }
}

export default Header;
