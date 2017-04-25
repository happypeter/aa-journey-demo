import React from 'react';
import { signin } from '../redux/actions/accountActions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class SignIn extends React.Component {
  constructor() {
    super();
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('_handleSubmit....');
    // this.context.router.push(`/`);
    let _user = {
                username: this.refs.username.value,
                password: this.refs.password.value
            };
    console.log(_user);
    this.props.signin(_user);
    browserHistory.push(`/`);
  }
  render(){
    return (
        <div className="signin">
          <span>登录</span>
          <form onSubmit={this._handleSubmit.bind(this)}>
            <p>
            name:
            <input ref='username' type="text" />
            </p>
            <p>
            password:
            <input ref='password' type="password" />
            </p>
            <p>
              <input type='submit' />
            </p>
          </form>
        </div>
    )
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { signin } )(SignIn);;
