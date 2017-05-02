import React from 'react';
import Header from './Header';
import '../css/home.css';
import { connect } from 'react-redux';
import { loadCourses } from '../redux/actions/courseActions';


class Home extends React.Component {

  componentWillMount() {
    this.props.loadCourses();
  }
  render(){
    let courseList = this.props.courses.map(item => (
      <li key={Math.random()}>{item.name}</li>
    ))
    return(
      <div className="home">
        <h1 className="page-title"> 所有课程 </h1>
        {courseList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses
})

export default connect(mapStateToProps, {loadCourses})(Home);
