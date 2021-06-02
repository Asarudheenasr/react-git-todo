import React, {PureComponent } from "react";

class List extends PureComponent {
  state = {
    score: 5,
    data: [
      {
        id: 1,
        name: "john",
        age: 45,
      },
      {
        id: 2,
        name: "vick",
        age: 10,
      },
      {
        id: 3,
        name: "sam",
        age: 15,
      },
    ],
  };
  
  onclickeve=()=> {
    this.setState({
      score: 10,
    });
  }
//   shouldComponentUpdate() {}
  render() {
    console.log(this.state.score);
    return (
      <div>
        <h1>List Component</h1>
        <ul>
          {this.state.data.map((value, index) => (
            <li key={index}>
              {" "}
              {value.id}-{value.name}-{value.age}
            </li>
          ))}
        </ul>
        <button onClick={this.onclickeve}>click</button>
      </div>
    );
  }
}
export default List;
