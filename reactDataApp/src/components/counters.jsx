import React, { Component } from 'react';
import Counter from './counter';

class  Counters extends Component {
   
    render() {
        return (<div className=' justify-content-center'>
            {this.props.appCounters.map(c => <Counter
                del={this.props.handleDel}
                hinc={this.props.handleInc}
                hDc={this.props.handledec}
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