import './App.css';
import React from 'react';
import like7 from './like.png';
import Love from './love.png';
import happy from './happy.png';

class FacebookEmojiCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number : 0 };
    this.pic = null;
    
    if (this.props.type === "Love") {
        this.pic = Love;
    } else if (this.props.type === "Like") {
        this.pic = like7;
    } else if (this.props.type === "happy") {
        this.pic = happy;
    }
    
   
    if (this.pic === null) {
        console.error(`Invalid emoji type provided: ${this.props.type}`);
        // Optionally set a default 'error' image here if you have one.
    }
  }

  increment = () => {
    this.setState((prevState) => {
      return {number : prevState.number + 1}
    });
  }

  render() {
    
    if (!this.pic) {
        return <div>Error: Could not find image for type '{this.props.type}'. Check spelling.</div>;
    }

    return (
      <div>
        <h5>It is {this.state.number} {this.props.type}</h5>
        <button onClick={this.increment}>
          <img class='App-logo' src={this.pic} alt={this.props.type + " icon"} />
          <b>{this.state.number}</b>
        </button>
      </div>
    );
  }
}

export default FacebookEmojiCounter;