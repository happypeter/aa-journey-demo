import React from 'react';
import Header from './Header';
import axios from 'axios';
import config from '../config';
import { fetchCats, createCat } from '../redux/actions/catActions';
import { connect } from 'react-redux';


class NewCat extends React.Component {

  componentWillMount(){
    this.props.fetchCats();
  }

  _handleSubmit(e) {
    e.preventDefault();
    let catName = this.refs.catName.value;
    this.props.createCat(catName);
    this.refs.catName.value = '';

  }
   _handleDelete(id){
     console.log('_handleDelete', id);
     let cats = this.state.cats;
     cats = cats.filter(value => value._id != id );
     this.setState({cats});
     axios.delete(`${config.host}/cat?id=${id}`).then(res => {
       console.log(res);
     });
   }
  render(){
    let catList = this.props.cats.map((item, i) => {
      return(
        <li key={i}>
          {item.name} -- {item._id}
          <span onClick={this._handleDelete.bind(this, item._id)}> 删除 </span>
        </li>)
    })
    return(
      <div>
        <ul>
          {catList.length == 0 ? '暂无分类': catList}
        </ul>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input ref='catName' type="text" />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cats: state.cats
});

export default connect(mapStateToProps, {fetchCats, createCat})(NewCat);
