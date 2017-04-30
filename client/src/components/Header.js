import React from 'react';
import { Link } from 'react-router';
import store from '../redux/store';
import { connect } from 'react-redux';
import { fetchUser, logout } from '../redux/actions/accountActions';
import '../css/header.css';



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
        <Link to='/signin'>登录</Link>
      </div>
    );
    return(
      <div className='header'>
        <div className='container'>
          <Link to='/'>首页</Link>
          { this.props.currentUser.length != 0 ? LogoutLink : LoginLink }
        </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  currentUser: state.account.currentUser
});

export default connect(mapStateToProps, {fetchUser, logout})(Header);;
