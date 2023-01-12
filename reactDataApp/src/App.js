import React, { Component } from 'react';
import Counter from './components/counter'
import Counters from './components/counters';
import Menu from './components/menu';
import { IconButton } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class App extends Component {
  state = {
    counters: []
    ,
    options: {
      xAxis: {
        categories: []
      },
      series: [
        {
          data: []
        }
      ]
    }
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
  componentDidMount() {
    fetch("http://parsianzarinfund.com/Data/PureAsset")
      .then(res => res.json())
      .then(
        (counters) => {
          this.setState({ counters: counters })
          let li = []
          let liDate = []
          counters.forEach(element => {
            if (element.JalaliDate > "1400/10/13") {
              li.push(element.NAV)
              liDate.push(element.JalaliDate)
            }
          });

          let op = { series: [{ data: li }],
                     xAxis: {categories: liDate},
                     chart: { type: 'area' } }
          this.setState({ options: op })
        },
        (error) => {
        }
      )

  }

  render() {
    console.log(this.state)
    return (<div  >

      <HighchartsReact highcharts={Highcharts} options={this.state.options} />

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th >ارزش</th>
            <th>تاریخ</th>
            <th >واحد</th>
          </tr>
        </thead>
        <tbody>
          {this.state.counters.map(c => <tr>
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
{/* <div> */ }
{/* <p>
          <IconButton variant="contained" color="primary">
            Click
          </IconButton>
        </p> */}
{/* </div> */ }
