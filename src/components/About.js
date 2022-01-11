import React, {Component} from 'react';
import Navbar from './Navbar';

class About extends Component {
    render() {
        return (
            <div> 
                <Navbar page="about"/>
                About
            </div>
        );
    }
}

export default About;