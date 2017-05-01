import axios from 'axios';
import config from '../../config';

export function fetchCats() {
  return dispatch => {
      axios.get(`${config.host}/cats`)
      .then((res) => {
        dispatch({type: 'LOAD_CATS', cats: res.data.cats});
      }).catch((err) => console.log(err));
  }
}
