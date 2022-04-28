import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
 class Counter extends Component {
    state = { count:10,
    imgUrl:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    tag:['tag1','tag2','tag3','tag4','tag5','tag6']
    } 
    // style={
    //     fontWeight:600,
    //     fontSize:'100px'
    // }
    render() { 
        return (<div>
                {/* <img src={this.state.imgUrl}></img> */}
                <button className='btn btn-danger m-2' >dec.</button>
                <span  className= {this.getClass()}>{this.formatCount()}</span>
                <button className='btn btn-success m-2'>Inc.</button>
                {this.state.tag.map(c=><div>{c}</div>)}
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