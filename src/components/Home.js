import {React, Component} from 'react';
import Navbar from './Navbar';

class Home extends Component {
    render() {
        return (
            <div> 
                <Navbar page="home"/>
                <div id="content-wrapper">
                    <div id="about-content">
                        <div id="about-text-wrapper">
                            <h1 class="about"> Hi I'm Marc! </h1>
                            <p class="about">
                                I am a sophomore pursuing a double major in Computer Science and Statistics at UC Berkeley. My immediate goals are to develop my backend and data science skills, but I'd gladly do anything that allows me to code and collaborate with others. 
                            </p>
                            <p class="about">
                                In my free time I like to work out, play basketball, work on projects, read, and spend time with friends! I love to learn, work hard for the things that are worth it, and be in environments that push me to my limits. 
                            </p>
                            <h2> Skills: </h2>
                            <ul>
                                <li> Fullstack development: MongoDB, Express, React, Node tech stack. Check out my <a id="projects-link" href="https://marcteoong.com/#/projects" target="_self"> projects</a> for more! </li>
                                <li> Languages: Enjoy Java and JavaScript. Well versed in Python, HTML, CSS, and SQL. Improving in C.</li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;