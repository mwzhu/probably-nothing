import React, {Component} from 'react';
import Navbar from './Navbar';

class Me extends Component {
    render() {
        return (
            <div> 
                <Navbar page="me"/>
                Me
            </div>
        );
    }
}

export default Me;