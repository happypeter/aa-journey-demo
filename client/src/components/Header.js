import React from 'react';
import { Link } from 'react-router';
import store from '../redux/store';
import { connect } from 'react-redux';


class Header extends React.Component {
  render(){
    return(
      <div>
        <Link to='/'>Home</Link>
        <Link to='/new-cat'>新建分类</Link>
        <Link to='/new-product'>新建商品</Link>
        <Link to='/signin'>登录</Link>
        <Link to='/signup'>注册</Link>
        { this.props.currentUser }
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  currentUser: state.account.currentUser
});

export default connect(mapStateToProps)(Header);;
