import axios from 'axios';
import config from '../../config';

export function signin(user) {
  return dispatch => {
    axios.post(`${config.host}/user/signin`, user)
    .then((res) => {
      dispatch({type: 'SIGN_IN', user: res.data.user});
    })
    .catch((err) => console.log(err))
  }
}
