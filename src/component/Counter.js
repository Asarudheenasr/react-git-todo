import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };
  incriment = () => {
      this.setState({
          counter:this.state.counter+1,
      });
  };
  decriment = () => {
    this.setState({
        counter:this.state.counter-1,
    });
  };
  render() {
    return (
      <div>
        <h2>Counter Component</h2>
        <h1>{this.state.counter}</h1>
        <button onClick={this.incriment}>++</button>
        <button onClick={this.decriment}>--</button>
      </div>
    );
  }
}
export default Counter;
