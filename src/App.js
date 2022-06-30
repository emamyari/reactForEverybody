import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar  from './components/navbar';


class App extends Component {
  state = {

  }

  render() {

    return (<div>  
      <NavBar></NavBar>
      <Counters         />
      </div> );
  }
}

export default App;



