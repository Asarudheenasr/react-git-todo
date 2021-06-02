import React, { Component } from "react";
import "./Todo.css";
class todo extends Component {

  state={
    input:"",
    items:[],
  }

  handleChange=event=>{
    this.setState({
      input:event.target.value,
    });
  };

  storeItems=(event)=>{
    event.preventDefault();
    const {input}= this.state
   
    this.setState({
      items: [...this.state.items,input], //spread operator
      input:"",
    });
  };

  deleteItem = (key)=>{
    /**
      //using splice method
      const allItems = this.state.items; 
      allItems.splice(key,1);
      this.setState({
      items:allItems
    });
     */
    this.setState({
      items:this.state.items.filter((data,index)=> index !== key),
    });
  }
  editItem = (key)=>{
    const {items }= this.state;
    let newtxt =  prompt();
    
    this.setState({
     items: items[key].val
   })
   
    
  }

  render() {
    const {input,items}= this.state;
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>ToDo App</h1>
          <input type="text" onChange={this.handleChange} value={input} placeholder="Enter...." />
        </form> 
        <ul>
          { items.map((data,index)=>(
            <li key={index}>{data} 
              <i onClick={()=>this.editItem(index)} className="fas fa-edit edit"></i>
              <i onClick={()=>this.deleteItem(index)} className="fas fa-trash-alt trash"></i>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}
export default todo;
