import React, { Component } from 'react'
import Calc from './Calc'

export class Parent extends Component {
  render() {
    return (
      <div>
        <Calc num1 ={20} num2 = {10}/>
      </div>
    )
  }
}

export default Parent
