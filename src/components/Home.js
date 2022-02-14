import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    state = {
      count: 1,
    }

    increment = () => {
      this.setState((state) => {
        if(state.count < 20) {
          return {count: state.count + 1}
        } else {
          return {count: state.count}
        }
      });
    }

    decrement = () => {
      this.setState((state) => {
        if(state.count > 1) {
          return {count: state.count - 1}
        } else {
          return {count: state.count}
        }
      });
    }

    handleChange = (event) => {
      this.setState({state: event.target.value});
    }
  
    render() {
      return (
        <div>
          <div className="homepage">
            <h1 className="minted"> 333/1777</h1>
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
                    <button className="minmax" onClick={this.decrement}> - </button>
                    <input className="num" type="text" value={this.state.count} onChange={this.handleChange} readOnly ></input>
                    <button className="minmax" onClick={this.increment}> + </button>
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