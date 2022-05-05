import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
 class Counter extends Component {
    state = { count:12 } 
   
     handleInc = () => {
        this.setState( { count:this.state.count+1 } )
     }

    render() { 
        return (<div>
                 <button    className='btn btn-danger m-2' >dec.</button>
                <span  className= {this.getClass()}>{this.formatCount()}</span>
                <button onClick={this.handleInc} className='btn btn-success m-2'>Inc.</button>
                </div>);
    }

    formatCount(){
          
        return this.state.count===0? ' zero ' : this.state.count
    }

    getClass(){
        return this.state.count===0? 'btn btn-primary' : 'btn btn-warning'
    }


}
 
export default Counter;