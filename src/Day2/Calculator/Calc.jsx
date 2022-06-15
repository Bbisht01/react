import React, { Component } from 'react'

export class Calc extends Component {
  render() {
    // console.log(this.props.num1,this.props.num2)
    return (
      <div>
        <p>{(this.props.num1)+(this.props.num2)}</p>
        <p>{(this.props.num1)-(this.props.num2)}</p>
        <p>{(this.props.num1)*(this.props.num2)}</p>
        <p>{(this.props.num1)%(this.props.num2)}</p>
        
      </div>
    )
  }
}

export default Calc
