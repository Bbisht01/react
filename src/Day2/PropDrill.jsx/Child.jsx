import React, { Component } from 'react';
import './Child.css';
export default class Child extends Component {
  state = {};
  
  render() {
    // console.log(this.props.user)
    const { name, age, place } = this.props.user;
    return (
      <div className="card">
        <h4> Name : {name}</h4>
        <h4> Age : {age}</h4>
        <h4> place : {place}</h4>
      </div>
    );
  }
}
