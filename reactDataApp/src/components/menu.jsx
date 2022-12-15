import React, { Component } from 'react';

class Menu extends Component {
    state = {  } 
    render() { 
        return (
        
            <nav className="navbar navbar-dark bg-dark mb-2 text-light">
                tedade kaala dar sabad: {this.props.tedad} 
           </nav>
        
            );
    }
}
 
export default Menu;