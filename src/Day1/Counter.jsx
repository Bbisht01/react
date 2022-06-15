import React from 'react';
import './style.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
    if (this.state.count >= 0) {
      this.setState({
        bgColor: 'green',
      });
    }
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
    if (this.state.count <= 0) {
      this.setState({
        bgColor: 'red',
      });
    }
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

 
  render() {
    return (
      <div>
        <button className="inc" onClick={(e) => this.increment(e)}>
          Increment
        </button>
        <button className="dec" onClick={(e) => this.decrement(e)}>
          Decrement
        </button>
        <button className="reset" onClick={(e) => this.reset(e)}>
          Reset
        </button>
        <h1 style={{ color: this.state.bgColor }}>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;