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
      toggle: {
        status: false,
      },
    };
  }
  changeName = async (e) => {
    // console.log(e);
    var obj = this.state;
    obj.name = e.target.value;
    // console.log(obj);
    await this.setState(obj);
  };
  changeCity = (e) => {
    var obj = this.state;
    obj.city = e.target.value;
    // console.log(obj);
    this.setState(obj);
  };
  changeAge = (e) => {
    var obj = this.state;
    obj.age = e.target.value;
    this.setState(obj);
    // this.setState({ ...this.state.user, age: e.target.value });
    // console.log('age');
  };
  changeGender = (e) => {
    var obj = this.state;
    obj.gender = e.target.value;
    this.setState(obj);
    // this.setState({ ...this.state.user, gender: e.target.value });
    // console.log(this.state.gender);
  };
  changeHeight = (e) => {
    var obj = this.state;
    obj.height = e.target.value;
    this.setState(obj);
    // this.setState({ ...this.state.user, height: e.target.value });
    // console.log(this.state.height);
  };
  onSubmit = (e) => {
    // this.state.toggle.status = true;
    var obj = this.state;
    obj.toggle.status = true;
    // console.log(obj);
    this.setState(obj);
    // console.log(this.state.name);
    // console.log(this.state.age);
    // console.log(this.state.gender);
    // console.log(this.state.height);
    // console.log(this.state.city);
    // alert('submitted!!! ', this.state.user.toString());
  };
  clear = () => {
    var obj = this.state;
    obj.toggle.status = true;
    console.log(obj);
    this.setState({
      user: {
        name: '',
        age: '',
        gender: '',
        height: '',
        city: '',
      },
      toggle: {
        status: false,
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
          value={this.state.name}
        />
        <br />
        Age:{' '}
        <Input
          type="text"
          funcName={this.changeAge}
          name={'ageBox'}
          value={this.state.age}
        />
        <br />
        Gender:{' '}
        <Input
          type="text"
          funcName={this.changeGender}
          name={'genderBox'}
          value={this.state.gender}
        />
        <br />
        Height:{' '}
        <Input
          type="text"
          funcName={this.changeHeight}
          name={'heightBox'}
          value={this.state.height}
        />
        <br />
        City :
        <Input
          type="text"
          funcName={this.changeCity}
          name={'cityBox'}
          value={this.state.city}
        />
        <br />
        <Button label={'submit'} formAction={this.onSubmit} />
        <br />
        <Button label={'clear'} formAction={this.clear} />
        <br />
        {/* <Button label={this.state.status} /> */}
        {/* {console.log(this.state.toggle.status)} */}
        {this.state.toggle.status ? <DisplayData props={this.state} /> : ''}
      </div>
    );
  }
}

function Input(props) {
  // console.log(props);
  return (
    <>
      <input
        onChange={(event) => props.funcName(event)}
        name={props.name}
        age={props.age}
        gender={props.gender}
        height={props.height}
        city={props.city}
        // value={props.value}
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

function DisplayData(props) {
  console.log(props);
  return (
    <>
      <p>{props.props.name}</p>
      <p>{props.props.age}</p>
      <p>{props.props.gender}</p>
      <p>{props.props.height}</p>
      <p>{props.props.city}</p>
    </>
  );
}

export default ReactForm;
