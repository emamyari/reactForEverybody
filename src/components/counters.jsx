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

    handleInc = counter => {
        console.log(counter)
        const counters=[...this.state.counters]
        const index=counters.indexOf(counter)
        counters[index]={...counter}
        counters[index].count++;
        this.setState({counters})
         // var co=this.state.count
        // var c=  co>=10 ? co : co+1
        // this.setState( { count:c } )
     }

     handleDec = (counter) => {
        console.log(counter)
        const counters=[...this.state.counters]
        const index=counters.indexOf(counter)
        counters[index]={...counter}
        counters[index].count--;
        this.setState({counters})
    }
   
     handleDelete = (counterId) => {
            // console.log('handle delete is runing',counterId)
        const counters = this.state.counters.filter(c => c.id != counterId)
        this.setState({ counters })
    }

    render() {
        return (<div className='row'>

            {
                this.state.counters.map(c => <div  >
                    <Counter 
                            key={c.id}
                            id={c.id} 
                            name={c.value} 
                            count={c.count} 
                            counter={c}
                            onDelete={this.handleDelete}
                            onInc={this.handleInc}
                            onDec={this.handleDec}
                            />
                    
                </div>)
            }
        </div>
        );
    }
}

export default Counters;