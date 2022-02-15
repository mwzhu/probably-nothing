import React, {Component} from 'react';
import './Home.css';
import {checkStatus, returnCount} from './Mint';
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";


class Home extends Component {
    state = {
      count: 1,
    }

    increment = () => {
      this.setState((state) => {
        if(state.count < 20) {
          checkStatus(document.getElementsByClassName('mint')[0], Number(document.getElementsByClassName("num")[0].value) + 1);
          return {count: state.count + 1}
        } else {
          return {count: state.count}
        }
      });
    }

    decrement = () => {
      this.setState((state) => {
        if(state.count > 1) {
          checkStatus(document.getElementsByClassName('mint')[0], Number(document.getElementsByClassName("num")[0].value ) - 1);
          return {count: state.count - 1}
        } else {
          return {count: state.count}
        }
      });
    }

    handleChange = (event) => {
      this.setState({state: event.target.value});
    }

    componentDidMount() {
      const mintButton = document.getElementsByClassName('mint')[0];
      const amount = Number(document.getElementsByClassName("num")[0].value);
      const minted = document.getElementsByClassName('minted')[0];
  
      // const input = document.querySelector('input');
      // input.addEventListener('change', (e) => {  
      //   checkStatus(mintButton, e.target.value);
      // });

      returnCount(minted);
      checkStatus(mintButton, amount);
    }
  
    render() {
      const stringSplitter = string => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
      };
      return (
        <div>
          <div className="homepage">
            <div className="warning">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40, 
                  deleteSpeed: 40,
                  stringSplitter,
                  strings: ["This is your first test.","Whitelists, bots, rug pulls, gas wars.", "Web 3.0 has been corrupted.", "We will create change.",
                  "Those who are worthy can join us."]
                }} 
              />
            </div>
            <div className="emojiContainer">
              <div id="emoji"> 
                <Typewriter
                  options={{
                    cursorClassName: "noCursor",
                    wrapperClassName: "emojiWrapper",
                    autoStart: true,
                    loop: true,
                    delay: 0, 
                    deleteSpeed: 0,
                    pauseFor: 400,
                    stringSplitter,
                    strings: ["🕹","🕛","📆","🕐","🦍","🕒","📗","🕔","🧭","🕙","🗺️","🕕","⛩️","🕛","💰", "🕘"],
                  }} 
                />
              </div>
            </div>
            <div className='mint-body'>
            <div className="description">
            <h1 className="minted">/1999</h1>
            <div className="invitation">
              Party Invitation
            </div>
            <div className="congratulations">
              Players will need a party invitation and the riddle answer to participate in the second test. 
            </div>
            <div className="price">
              0.029 Ξ
            </div>
            </div>
                <div className="amount">
                    <button className="minmax" onClick={
                      this.decrement
                    }> - </button>
                    <input className="num" type="text" value={this.state.count} onChange={this.handleChange} readOnly ></input>
                    <button className="minmax" onClick={
                      this.increment
                    }> + </button>
                </div>
                <button className="mint">MINT</button>
            </div>
          </div> 
          <div className="footer">
          Twitter and discord to be launched after mint out. Be ready.
          </div>
          </div>
        );
    }
}

export default Home;