import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter';


class App extends Component {
  state = { counters:[
                      {id:1,value:"آیفون"},
                      {id:2},
                      {id:3},
                      {id:6}
                      ] } 
  render() { 

    console.log(this.state.counters)
    return ( <div>
               {this.state.counters.map(c=><div>
                                                <Counter   key={c.id} /> 
                                                <div> {c.value}</div>
                                            </div> )
                } 
              </div>);
  }
}
 
export default App ;



