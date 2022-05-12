import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: "آیفون",count:8 },
      { id: 2, value: "گاغذ",count:100 },
      { id: 3, value: "جارو",count:150 },
      { id: 6, value: "مک بوک",count:10 }
    ]
  }

  handleDelete = (counterId) => {
     console.log(counterId)
 }

  render() {

    console.log(this.state.counters)
    return (<div className='row'>
      {this.state.counters.map(c => <div  >

        <Counter key={c.id} name={c.value}  count={c.count}       />
        <button onClick={()=>this.handleDelete(c.id)} className='btn btn-danger m-2'>Delete</button>

       </div>)
      }
    </div>);
  }
}

export default App;



