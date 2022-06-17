import React, { Component } from 'react';

export class ReactForm extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
        age: '',
        city: '',
      },
    };
  }
  changeName = (e) => {
    console.log(e);
    this.setState({ ...this.state.user, name: e.target.value });
    console.log('name');
  };
  changeCity = (e) => {
    this.setState({ ...this.state.user, city: e.target.value });
    console.log(this.state.city);
  };
  changeAge = (e) => {
    this.setState({ ...this.state.user, age: e.target.value });
    console.log('age');
  };
  onSubmit = () => {
    alert('submitted!!! ', this.state.user.toString());
  };
  clear = () => {
    this.setState({
      user: {
        name: '',
        age: '',
        city: '',
      },
    });
  };
  render() {
    return (
      <div>
        Name:{' '}
        <Input
          funcName={this.changeName}
          name={'nameBox'}
          val={this.state.name}
        />
        Age:{' '}
        <Input funcName={this.changeAge} name={'ageBox'} val={this.state.age} />
        City :
        <Input
          funcName={this.changeCity}
          name={'cityBox'}
          val={this.state.city}
        />
        <Button label={'submit'} formAction={this.onSubmit} />
        <Button label={'clear'} formAction={this.clear} />
      </div>
    );
  }
}

function Input(props) {
  console.log(...[props]);
  return (
    <>
      <input
        onChange={(event) => props.funcName(event)}
        name={props.name}
        value={props.val}
      />
    </>
  );
}

function Button(props) {
  return (
    <>
      <button onClick={() => props.formAction()}>{props.label}</button>
    </>
  );
}

export default ReactForm;
