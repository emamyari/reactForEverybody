import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

 class Counter extends Component {
    state = { count:this.props.count } 
   
   
    render() { 
        console.log(this.props)
        return (<div>
                 <button onClick={this.handleDec}   className='btn btn-danger m-2' >dec.</button>
                <span  className= {this.getClass()}>{this.formatCount()}</span>
                <button onClick={this.handleInc} className='btn btn-success m-2'>Inc.</button>
                
                <span  className= {this.getClass()}>{this.props.name}</span>  
                
                <button onClick={() => this.handleDelete(c.id)} className='btn btn-danger m-2'>Delete</button>
                
                </div>);
    }

    formatCount(){
          
        return this.state.count===0? ' zero ' : this.state.count //-----------------
    }

    getClass(){
        return this.state.count===0? 'btn btn-primary' : 'btn btn-warning'
    }


}
 
export default Counter;