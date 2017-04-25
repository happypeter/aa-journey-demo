import axios from 'axios';
import config from '../../config';

export function signin(user) {
  return dispatch => {
    axios.post(`${config.host}/user/signin`, user)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem('userId', res.data.userId);
      dispatch({type: 'SIGN_IN', user: res.data.user});
    })
    .catch((err) => console.log(err))
  }
}
