import React, {Component} from 'react';
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import './Home.css';
import Navbar from './Navbar';

class Home extends Component {
    render() {
        const stringSplitter = string => {
            const splitter = new GraphemeSplitter();
            return splitter.splitGraphemes(string);
        };
        return (
            <div>
                <Navbar page="home"/>
                <div className="homepage">
                    <div className="introduction">
                        Hi, I'm Marc.
                    </div>
                    <div className="emojiContainer">
                        <div id="emoji"> 
                            <Typewriter
                                options={{
                                    cursorClassName: "noCursor",
                                    loop: true,
                                    delay: 0, 
                                    deleteSpeed: 0,
                                    stringSplitter}}
                                onInit={(typewriter) => {
                                    typewriter.typeString("💻")
                                    .pauseFor(4800)
                                    .deleteAll()
                                    .typeString("₿")
                                    .pauseFor(5600)
                                    .deleteAll()
                                    .typeString("🏋️")
                                    .pauseFor(5000)
                                    .deleteAll()
                                    .typeString("🖼")
                                    .pauseFor(4250)
                                    .deleteAll()
                                    .typeString("🐍")
                                    .pauseFor(3700)
                                    .deleteAll()
                                    .typeString("🧥")
                                    .pauseFor(4500)
                                    .deleteAll()
                                    .start();
                                }}
                            />
                        </div>
                        <div className="shadow"></div>
                    </div>
                    <div className="description">
                        I'm a
                        <Typewriter
                            options={{
                                strings: ['eager developer.', 'blockchain enthusiast.', 'nighttime gym rat.', 'nft collector.', 'Lakers fan.', 'weekend stylist.'],
                                delay: 75,
                                deleteSpeed: 70,
                                pauseFor: 1800,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;