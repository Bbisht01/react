import React, { Component } from 'react';
import Parent from './Parent';

export default class Data extends Component {
  state = {
      dataList: [
        { name: 'Aliya', age: 20, place: 'delhi' },
        { name: 'Arjun', age: 23, place: 'Nainital' },
        { name: 'Nitesh', age: 25, place: 'Chennai' },
        { name: 'Vihan', age: 26, place: 'Banglore' },
      ],
    };
  
  render() {
    // console.log(this.state.dataList)
    return (
      <>
        <Parent props={this.state.dataList} />
      </>
    );
  }
}
