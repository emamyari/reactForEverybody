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
    render() {
        return (<div>
            {this.state.counters.map(c =>  <Counter key={c.id} esm={c.name} meghdar={c.value}></Counter>            )}
        </div>
        );
    }
}

export default Counters;