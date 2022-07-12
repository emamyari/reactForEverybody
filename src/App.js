import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: "آیفون", count: 8 },
      { id: 2, value: "کاغذ", count: 100 },
      { id: 3, value: "جارو", count: 150 },
      { id: 6, value: "مک بوک", count: 10 }
    ]
  }

  handleInc = counter => {
    console.log(counter)
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].count++;
    this.setState({ counters })
    // var co=this.state.count
    // var c=  co>=10 ? co : co+1
    // this.setState( { count:c } )
  }

  handleDec = (counter) => {
    console.log(counter)
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].count--;
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    // console.log('handle delete is runing',counterId)
    const counters = this.state.counters.filter(c => c.id != counterId)
    this.setState({ counters })
  }

  componentDidMount() {

    fetch("http://192.168.1.116:7000/test/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ counters: result })
        },
        (error) => {
        }
      )

  }

  render() {

    return (<div>
      <NavBar></NavBar>
      <Counters
        cntr={this.state.counters}
        del={this.handleDelete} />
    </div>);
  }
}

export default App;



