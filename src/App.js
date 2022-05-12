import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: "آیفون" },
      { id: 2, value: "گاغذ" },
      { id: 3, value: "جارو" },
      { id: 6, value: "مک بوک" }
    ]
  }
  render() {

    console.log(this.state.counters)
    return (<div className='row'>
      {this.state.counters.map(c => <div  >
        <Counter key={c.id} />
        <div className='btn btn-primary m-2 '> {c.value}</div>
      </div>)
      }
    </div>);
  }
}

export default App;



