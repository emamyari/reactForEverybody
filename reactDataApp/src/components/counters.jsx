import React, { Component } from 'react';
import Counter from './counter';

class  Counters extends Component {
   
    render() {
        return (<div className=' justify-content-center'>
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