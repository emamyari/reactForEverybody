﻿import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0
    } 
  
    handleDec =() =>{
        this.state.count>0? this.setState({count: this.state.count-1}) : this.setState({count: this.state.count})
    }
    
    render() { 
        let myClass="badge m-2 badge-"
        myClass=myClass+(this.props.meghdar>0?'warning':'primary');
        console.log(this.props.esm)
        return (
            <div>
                <button onClick={this.handleDec} className='btn btn-warning'>Decrement</button>
                <span className={myClass}>{this.countText()}</span>
                <button onClick={()=>this.props.hinc(this.props.cntr)} className='btn btn-success'>افزودن</button>
                <button className='btn btn-danger' onClick={()=>this.props.del(this.props.cntr)} >Delete</button>
            </div>
         );
    }
    countText(){
        return this.props.meghdar===0 ? 'zero' : this.props.meghdar
    }
}
 
export default Counter;