import React from 'react';
import { Link } from 'react-router';
import store from '../redux/store';
import { connect } from 'react-redux';
import { fetchUser, logout } from '../redux/actions/accountActions';


class Header extends React.Component {
  componentWillMount(){
    this.props.fetchUser();
  }
  render(){
    const LogoutLink = (
      <div>
        <Link to='/profile'>{ this.props.currentUser }</Link>
        <Link to='/'onClick={this.props.logout}>退出</Link>
      </div>
    );

    const LoginLink = (
      <div>
        <Link to='/signup'>注册</Link>
        <Link to='/Signin'>登录</Link>
      </div>
    );
    return(
      <div>
        <Link to='/'>Home</Link>
        <Link to='/new-cat'>新建分类</Link>
        <Link to='/new-product'>新建商品</Link>
        { this.props.currentUser.length !=0?LogoutLink:LoginLink}

      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  currentUser: state.account.currentUser
});

export default connect(mapStateToProps, {fetchUser, logout})(Header);;
