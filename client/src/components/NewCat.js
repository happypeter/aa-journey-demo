import React from 'react';
import Header from './Header';
import axios from 'axios';
import config from '../config';


class NewCat extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: []
    }
  }

  componentWillMount(){
    axios.get(`${config.host}/cats`).then(res => {
      console.log('componentWillMount', res.data.cats);
      this.setState({
        cats: res.data.cats
      })
    })
  }
  render(){
    let catList = this.state.cats.map((item, i) => {
      return(
        <li key={i}>
          {item.name} -- {item._id}
        </li>)
    })
    return(
      <div>
        {catList}
      </div>
    )
  }
}

export default NewCat;
