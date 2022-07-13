



  import logo from './logo.svg';
  import React, { Component } from 'react';
  import './App.css';
  import Counters from './components/counters';
  import NavBar from './components/navbar';
  
  
  class App extends Component {
    state = {
      counters: [
       
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
  
      fetch("http://192.168.1.116:8000/test/")
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
  
  <table className="table table-striped">
    <thead>
      <tr>
        <th >First</th>
        <th >Last</th>
      </tr>
    </thead>
    <tbody>
      {this.state.counters.map(c=>
      <tr>
        <td>{c.name}</td>
        <td>{c.family}</td>
      </tr>
       )}
      
    </tbody>
  </table>
  
  
        {/* <NavBar></NavBar>
        <Counters
          cntr={this.state.counters}
          del={this.handleDelete} /> */}
      </div>);
    }
  }
  
  export default App;
  
  
  