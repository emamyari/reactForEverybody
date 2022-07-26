  import logo from './logo.svg';
  import  { Component } from 'react';
  import './App.css';
  import * as React from 'react';

  import Counters from './components/counters';
  import NavBar from './components/navbar';
  import Highcharts from 'highcharts';
  import HighchartsReact from 'highcharts-react-official';

// let option={
//   chart: {
//     type: 'pie'
// },
//   series:[{
//     name: 'Share',
//     data: [
//         { name: 'Chrome', y: 61.41 },
//         { name: 'Internet Explorer', y: 11.84 },
//         { name: 'Firefox', y: 10.85 },
//         { name: 'Edge', y: 4.67 },
//         { name: 'Safari', y: 4.18 },
//         { name: 'Other', y: 7.05 }
//     ]
// }]
// }



  class App extends Component {
    state = { 
      counters:[],
      series: [{ data: [] }],
      dline:{series: [{ data: [] }]}

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
  
      fetch("http://192.168.1.116:8000/test4/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({ 
              
              chart:{type:"pie"},
              series: [{ data: result.hc }]
              ,counters: result.cn
              ,dline:{series:[{data: result.hc}]}
            })
             
          },
          (error) => {
          }
        )
  
    }
  
    render() {
  
      return (<div className='App'>
  
                 <table className="table table-striped">
                    <thead>
                      <tr>
                        <th >id</th>
                        <th >name</th>
                        <th >price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.counters.map(c=>
                      <tr>
                        <td>{c.name}</td>
                        <td>{c.family}</td>
                        <td>{c.nc}</td>
                      </tr>
                      )}
                      
                    </tbody>
                  </table> 
 
                  <HighchartsReact highcharts={Highcharts} options={this.state}/>   
                  <HighchartsReact highcharts={Highcharts} options={this.state.dline}/>   

                  {/* <HighchartsReact
                highcharts={Highcharts}
                options={options}
            /> */}
        {/* <NavBar></NavBar>
        <Counters
          cntr={this.state.counters}
          del={this.handleDelete} /> */}
      </div>);
    }
  }
  
  export default App;
  
  
  