import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
 
    componentDidMount() {
        document.querySelector('.current').classList.remove('current');
        switch(this.props.page) {
            case "about":
                document.getElementById('nav-about').classList.add('current');
                break;
            case "projects":
                document.getElementById('nav-projects').classList.add('current');
                break;
            case "work":
                document.getElementById('nav-work').classList.add('current');
                break;
            case "me":
                document.getElementById('nav-me').classList.add('current');
                break;
            case "home":
                document.getElementById('nav-home').classList.add('current');
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <header id="nav-bar-wrapper">
                <Link className="site-logo" to="/" id="logo">  
                    <span className="logo-text"> M </span>
                </Link>

                <div id="nav-bar-right">
                    <Link className="nav-bar current" id="nav-home" to="/"> home </Link>
                    <Link className="nav-bar" id="nav-about" to="/about"> about </Link>
                    <Link className="nav-bar" id="nav-projects" to="/projects"> projects </Link>
                    <Link className="nav-bar" id="nav-work" to="/work"> work </Link>
                    <Link className="nav-bar" id="nav-me" to="/me"> me </Link>
                </div>
            </header>
        );
    }
}

export default Navbar;