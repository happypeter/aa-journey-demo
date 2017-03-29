import React from 'react';
import axios from 'axios';
import config from '../config';

class Product extends React.Component {
  constructor() {
    super();
    this.state={
       cats: []
    }
  }

  componentWillMount(){
  }
  _handleSubmit(e) {

  }
  render(){
    return (
        <div className="product">
          <span>新建商品</span>
          <form onSubmit={this._handleSubmit.bind(this)}>
            <input ref='productName' type="text" />
            <input type='submit' />
          </form>
        </div>
    )
  }
}

export default Product;
