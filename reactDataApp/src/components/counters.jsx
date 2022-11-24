import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 2, name: 'iphone' },
            { id: 2, value: 4, name: 'macBook' },
            { id: 3, value: 9, name: 'phone cover' },
            { id: 4, value: 1, name: 'book' },
            { id: 5, value: 8, name: 'TV' }
        ]
    }
    handleDel = (counter) => {
       let a=this.state.counters.filter(c=>c!=counter)
        this.setState({counters:a})
    }
    handleInc =(counter) =>{
       let pos=this.state.counters.indexOf(counter)
       let newCounters=this.state.counters.filter(c=>c!=counter)
       counter.value<10?counter.value++:counter.value=counter.value
       newCounters=[...newCounters.slice(0,pos)
                    ,counter
                    ,...newCounters.slice(pos)]
       this.setState({counter:newCounters})
    }
    handleDec =(counter) =>{
        let pos=this.state.counters.indexOf(counter)
        let newCounters=this.state.counters.filter(c=>c!=counter)
        counter.value--
        newCounters=[...newCounters.slice(0,pos)
                     ,counter
                     ,...newCounters.slice(pos)]
        this.setState({counter:newCounters})
     }
    render() {
        return (<div>
            {this.state.counters.map(c => <Counter
                del={this.handleDel}
                hinc={this.handleInc}
                hDc={this.handleDec}
                id={c.id}
                key={c.id}
                esm={c.name}
                meghdar={c.value}
                cntr={c}
                ></Counter>)}
        </div>
        );
    }
}

export default Counters;