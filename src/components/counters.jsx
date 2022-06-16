import React, { Component } from 'react';
import Counter from './counter';
import NavBar  from './navbar';
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: "آیفون", count: 8 },
            { id: 2, value: "کاغذ", count: 100 },
            { id: 3, value: "جارو", count: 150 },
            { id: 6, value: "مک بوک", count: 10 }
        ]
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id != counterId)
        this.setState({ counters })
    }

    render() {
        return (<div className='row'>
                        <NavBar></NavBar>

            {
                this.state.counters.map(c => <div  >
                    <Counter key={c.id} name={c.value} count={c.count} />
                    <button onClick={() => this.handleDelete(c.id)} className='btn btn-danger m-2'>Delete</button>
                </div>)
            }
        </div>
        );
    }
}

export default Counters;