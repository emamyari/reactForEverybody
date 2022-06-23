import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: "آیفون", count: 8 },
            { id: 2, value: "کاغذ", count: 100 },
            { id: 3, value: "جارو", count: 150 },
            { id: 6, value: "مک بوک", count: 10 }
        ]
    }

    handleInc = () => {
        var co=this.state.count
        var c=  co>=10 ? co : co+1
        this.setState( { count:c } )
     }

     handleDec = () => {
        var co=this.state.count
        var c=  co<=0 ? co : co-1
        this.setState( { count:c } )
     }
   
     handleDelete = () => {
            console.log('handle delete is runing')
        // const counters = this.state.counters.filter(c => c.id != counterId)
        // this.setState({ counters })
    }

    render() {
        return (<div className='row'>

            {
                this.state.counters.map(c => <div  >
                    <Counter 
                            key={c.id} 
                            name={c.value} 
                            count={c.count} 
                            onDelete={this.handleDelete}
                            />
                    
                </div>)
            }
        </div>
        );
    }
}

export default Counters;