import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Counter extends Component {
    // state = { count:this.props.count } 


    render() {
        return (<div>
            <button onClick={() => this.props.onDec(this.props.counter)} className='btn btn-danger m-2' >dec.</button>
            <span className={this.getClass()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onInc(this.props.counter)} className='btn btn-success m-2'>Inc.</button>
            <span className={this.getClass()}>{this.props.name}</span>
            <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger m-2'>Delete</button>
        </div>);
    }

    formatCount() {
        return this.props.count === 0 ? ' zero ' : this.props.count //-----------------
    }

    getClass() {
        return this.props.count === 0 ? 'btn btn-primary' : 'btn btn-warning'
    }


}

export default Counter;