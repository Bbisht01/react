import React, { Component } from 'react';
import './InputForm.css';

export class ReactForm extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
        age: '',
        gender: '',
        height: '',
        city: '',
      },
    };
  }
  changeName = (e) => {
    console.log(e);
    this.setState((prevState) => ({
      user: { ...prevState.user, name: e.target.value },
    }));
    // console.log('name');
  };
  changeCity = (e) => {
    this.setState((prevState) => ({
      user: { ...prevState.user, city: e.target.value },
    }));
    // console.log(this.state.city);
  };
  changeAge = (e) => {
    this.setState((prevState) => ({
      user: { ...prevState.user, age: e.target.value },
    }));
    // console.log('age');
  };
  changeGender = (e) => {
    this.setState((prevState) => ({
      user: { ...prevState.user, gender: e.target.value },
    }));
    // console.log(this.state.gender);
  };
  changeHeight = (e) => {
    this.setState((prevState) => ({
      user: { ...prevState.user, height: e.target.value },
    }));
    // console.log(this.state.height);
  };
  onSubmit = (e) => {
    // this.setState({ ...this.state.user, user: e.target.value });
    const output = this.state.user;
    console.log(output);
    // alert('submitted!!! ', this.state.user.toString());
  };
  clear = () => {
    this.setState({
      user: {
        name: '',
        age: '',
        gender: '',
        height: '',
        city: '',
      },
    });
  };
  render() {
    return (
      <div className="formCard">
        Name:{' '}
        <Input
          type="text"
          funcName={this.changeName}
          name={'nameBox'}
          val={this.state.name}
        />
        <br />
        Age:{' '}
        <Input
          type="text"
          funcName={this.changeAge}
          name={'ageBox'}
          val={this.state.age}
        />
        <br />
        Gender:{' '}
        <Input
          type="text"
          funcName={this.changeGender}
          name={'genderBox'}
          val={this.state.gender}
        />
        <br />
        Height:{' '}
        <Input
          type="text"
          funcName={this.changeHeight}
          name={'heightBox'}
          val={this.state.height}
        />
        <br />
        City :
        <Input
          type="text"
          funcName={this.changeCity}
          name={'cityBox'}
          val={this.state.city}
        />
        <br />
        <Button label={'submit'} formAction={this.onSubmit} />
        <br />
        <Button label={'clear'} formAction={this.clear} />
      </div>
    );
  }
}

function Input(props) {
  // console.log(...[props]);
  return (
    <>
      <input
        onChange={(event) => props.funcName(event)}
        name={props.name}
        age={props.age}
        gender={props.gender}
        height={props.height}
        city={props.city}
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
