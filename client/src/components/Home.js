import React from 'react';
import Header from './Header';
import '../css/home.css';
import { connect } from 'react-redux';
import Cart from './Cart';
import { addCourseToCart } from '../redux/actions/cartActions';
import { loadCourses } from '../redux/actions/courseActions';


class Home extends React.Component {

  componentWillMount() {
    this.props.loadCourses()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id) {
    console.log(id)
    this.props.addCourseToCart(id);
  }
  render(){

    let courseList = this.props.courses.map(item => (
      <li className='course' key={Math.random()}>
         <div className='card'>
           <img src={item.poster} />
           <p className='title'>{item.name}</p>
           <button disabled={this.props.cart.includes(item._id)} className={this.props.cart.includes(item._id) ? 'buy disabled': 'buy'} onClick={this.handleClick.bind(this, item._id)}>购买</button>
         </div>
      </li>
    ))
    return(
      <div className="home">
        <h1 className="page-title"> 所有课程 </h1>
        <ul className='course-list container'>
          {courseList}
        </ul>
        <Cart />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses,
  cart: state.cart,
})

export default connect(mapStateToProps, {loadCourses, addCourseToCart})(Home);
