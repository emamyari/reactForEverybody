import React, { Component } from 'react';
import Counter from './components/counter'
import Counters from './components/counters';
import Menu from './components/menu';
import { IconButton } from '@mui/material';

class App extends Component {
  state = {
    counters: []
  }
  handleDel = (counter) => {
    let a = this.state.counters.filter(c => c != counter)
    this.setState({ counters: a })
  }
  handleInc = (counter) => {
    let pos = this.state.counters.indexOf(counter)
    let newCounters = this.state.counters.filter(c => c != counter)
    counter.value < 10 ? counter.value++ : counter.value = counter.value
    newCounters = [...newCounters.slice(0, pos)
      , counter
      , ...newCounters.slice(pos)]
    this.setState({ counter: newCounters })
  }
  handleDec = (counter) => {
    let pos = this.state.counters.indexOf(counter)
    let newCounters = this.state.counters.filter(c => c != counter)
    counter.value--
    newCounters = [...newCounters.slice(0, pos)
      , counter
      , ...newCounters.slice(pos)]
    this.setState({ counter: newCounters })
  }
  componentDidMount(){
    fetch("http://parsianlotusfund.ir/Data/PureAsset")
    .then(res => res.json())
    .then(
      (counters) => {
        this.setState({counters: counters })
         console.log(this.state)
      },
      (error) => {
      }
    )

  }
 
  render() {
    return (<div  >

<table className="table">
  <thead className="thead-dark">
    <tr>
      <th >NAV</th>
      <th>JalaliDate</th>
      <th >PurchaseNAVPerShare</th>
    </tr>
  </thead>
  <tbody>
    {this.state.counters.map(c=><tr>
      <td>{c.NAV}</td>
      <td>{c.JalaliDate}</td>
      <td>{c.PurchaseNAVPerShare}</td>
    </tr>)}
  </tbody>
</table>

    
    </div>);
  }
}

export default App;






  {/* <Menu tedad={this.state.counters.length} ></Menu>

      <Counters
        handleDel={this.handleDel}
        handleInc={this.handleInc}
        handledec={this.handleDec}
        appCounters={this.state.counters}
      ></Counters> */}
      {/* <div> */}
        {/* <p>
          <IconButton variant="contained" color="primary">
            Click
          </IconButton>
        </p> */}
      {/* </div> */}
