import React, { Component, useContext } from 'react';
import { LoginContext, LoginProvider, LoginConsumer } from './LoginContext';

export default function Login() {
  const x = useContext(LoginContext);
  console.log(LoginConsumer);
  return (
    <div>
      <input
        type="text"
        Placeholder="username"
        onChange={(e) => {
          x.changeName(e.target.value);
          console.log(x);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        Placeholder="password"
        onChange={(e) => {
          x.changePass(e.target.value);
          console.log(x);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          if (x.username == 'B' && x.password == '12345') {
            alert('login');
          } else {
            alert('error');
          }
        }}
      >
        Submit
      </button>
    </div>
  );
}
