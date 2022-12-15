import React, { Component } from 'react';

class Counter extends Component {
    componentDidMount(){

    }
    render() { 
        let myClass="badge m-2 badge-"
        myClass=myClass+(this.props.meghdar>0?'warning':'primary');
        return (
            <div className='mb-2' >
                <button onClick={()=>this.props.hDc(this.props.cntr)} className='btn btn-warning'>کاهش</button>
                <span className={myClass}>{this.countText()}</span>
                <button onClick={()=>this.props.hinc(this.props.cntr)} className='btn btn-success'>افزایش</button>
                <button className='btn btn-danger' onClick={()=>this.props.del(this.props.cntr)} >Delete</button>
            </div>
         );
    }
    countText(){
        return this.props.meghdar===0 ? 'zero' : this.props.meghdar
    }
}
 
export default Counter;