import {React, Component} from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
 
    componentDidMount() {
        document.querySelector('.current').classList.remove('current');
        switch(this.props.page) {
            case "home":
                document.getElementById('nav-home').classList.add('current');
                break;
            case "projects":
                document.getElementById('nav-projects').classList.add('current');
                break;
            case "resume":
                document.getElementById('nav-resume').classList.add('current');
                break;
            case "contact":
                document.getElementById('nav-contact').classList.add('current');
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <header id="nav-bar-wrapper"> 
                <a className="site-logo" href="https://marcteoong.com/#/" target="_self" id="logo">  
                    <span className="logo-text"> M </span>
                </a>
                <div id="nav-bar-right">
                <a className="nav-bar current" id="nav-home" href="https://marcteoong.com/#/" target="_self"> About </a>
                <a className="nav-bar" id="nav-projects" href="https://marcteoong.com/#/projects" target="_self"> Projects </a>
                <a className="nav-bar" id="nav-resume" href="https://marcteoong.com/#/resume" target="_self"> Resume </a>
                <a className="nav-bar" id="nav-contact" href="https://marcteoong.com/#/contact" target="_self"> Contact </a>
                </div>
            </header>
        );
    }
}

export default Navbar;