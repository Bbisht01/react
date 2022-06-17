import React, { Component } from 'react'

export default class Button extends Component {
    constructor() {
        super();
        this.state = {
          inputValue: "",
        };
      }
    addValue = (e)=>{            
         if(e.target.value != ""){
          console.log(e.target.value)
          this.setState({inputValue:e.target.value})
         }
    }

  render() {
    return (
      <div>
        <input type="text"  onChange={this.addValue}/>
        {this.state.inputValue}
        <br />
        <button onClick={this.addValue}>Add</button>        
      </div>
    )
  }
}
