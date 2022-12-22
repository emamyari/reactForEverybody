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
     this.fetchData()
  }
  fetchData = async () => {
    const response = await fetch('http://parsianlotusfund.ir/Data/PureAsset');
    const data = await response.json();
    this.setState({counters:data})
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
    <tr>
      <td>Larry</td>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
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
