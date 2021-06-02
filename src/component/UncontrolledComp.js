import React, { Component } from "react";

class UncontrolledComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.inputOne = React.createRef();
    this.inputTwo = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.inputOne.value);
    console.log(this.inputTwo.value);
  };
  render() {
    return (
      <div>
        <form>
          <h2>FormComponent</h2>
          <input
            type="text"
            
            name="firstName"
            ref={input=>this.inputOne = input}
          />
          <input
            type="text"
           
            name="lastName"
            ref={input=>this.inputTwo = input}
          />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default UncontrolledComp;
