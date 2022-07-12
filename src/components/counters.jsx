import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
   
    render() {
        console.log("render")

        return (<div className='row'>

            {
                this.props.cntr.map(item => <div  >
                    <Counter 
                            key={item.id}
                            id={item.id} 
                            name={item.value} 
                            count={item.count} 
                            counter={item}
                            onDelete={this.props.del}
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