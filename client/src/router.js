import React from 'react';
import { Router,Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App.js'
import Home from './components/Home.js'
import NewCat from './components/NewCat.js'
import NewCourse from './components/NewCourse.js'
import SignIn from './components/SignIn.js'
import SignUp from './components/SignUp.js'
import Profile from './components/Profile.js'
import Order from './components/Order.js'


function requireAuth(nextState, replace) {
  if (!localStorage.getItem('userId')) {
    replace({
      pathname: '/signin'
    })
  }
}

export default function () {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='new-cat' onEnter={requireAuth} component={NewCat} />
        <Route path='new-course' onEnter={requireAuth} component={NewCourse} />
        <Route path='signin' component={SignIn} />
        <Route path='signup' component={SignUp} />
        <Route path='profile' onEnter={requireAuth} component={Profile} />
        <Route path='order' component={Order} />
      </Route>
    </Router>
  )
}
