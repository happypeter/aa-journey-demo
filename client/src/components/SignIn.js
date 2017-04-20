import React from 'react';
import axios from 'axios';
import config from '../config';

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
    axios.post(`${config.host}/user/signin`, _user)
    .then((res) => {
      console.log(res)
      this.context.router.push(`/`);
    })
    .catch((err) => console.log(err))
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

SignIn.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignIn;
