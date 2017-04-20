import React from 'react';
import Header from './Header';
import '../css/main.css';


class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <Header />
        { this.props.children }
        <h1>Footer</h1>
      </div>
    )
  }
}

export default App;
