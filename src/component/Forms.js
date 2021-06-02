import React, { Component } from "react";
class Forms extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  onChangeEvent = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    //  console.log(this.state.text);
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form>
        <h2>FormComponent</h2>
        <input
          type="text"
          value={this.state.firstName}
          onChange={this.onChangeEvent}
          name="firstName"
          id=""
        />
        <input
          type="text"
          value={this.state.lastName}
          onChange={this.onChangeEvent}
          name="lastName"
          id=""
        />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}
export default Forms;
