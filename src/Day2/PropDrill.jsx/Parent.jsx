import React from 'react';
import Child from './Child';
import './Child.css';
export default class Parent extends React.Component {
  state = {
      users: undefined,
    };  

  componentDidMount() {
    this.setState({
      users: this.props?.props,
    });
  }
  render() {
    // console.log(this.props.props);

    return (
      <>
        <div className="Parentcard">
          {this.state.users?.map((ele, ind) => (
            <Child key={ind} user={ele} />
          ))}
        </div>
      </>
    );
  }
}
