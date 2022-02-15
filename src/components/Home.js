import React, {Component} from 'react';
import './Home.css';
import {checkStatus, returnCount} from './Mint';


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
      return (
        <div>
          <div className="homepage">
            <h1 className="minted">/1999</h1>
            <div className="emojiContainer">
            <div id="emoji"> 
            ✉️
            </div>
            </div>
            <div className="shadow"></div>
            <div className='mint-body'>
            <div className="description">
            <div className="invitation">
              Party Invitation
            </div>
            <div className="congratulations">
              Congratulations, you're the first one here.
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
                <button className="mint"> MINT </button>
            </div>
          </div>
          <div className="footer">
          Twitter and discord to be launched after mint out, brace yourselves :)
          </div>
          </div>
        );
    }
}

export default Home;