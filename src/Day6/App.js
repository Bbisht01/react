import React from 'react';
import './style.css';
// import Counter from './Counter';
// import Data from './PropDrill/Data';
// import Parent from './PropDrill/Parent';
// import Project from './Button';
// import Header from './Header';
// import ReactForm from './ReactForm';
// import Images from './Gallery/Images';
// import ContextHolder from './ContextApi/ContextHolder';
import Login from './LoginContext/Login';
import { LoginContext, LoginProvider } from './LoginContext/LoginContext';

export default function App() {
 
  const initialState = {
    username: '',
    password: '',
    changeName: changeName,
    changePass: changePass,
  };
  function changeName(val){
    initialState.username=val
  }
  function changePass(val){
    initialState.password=val
  }
  console.log(LoginProvider);
  return (
    <div>
      {/* <Counter /> */}
      {/* <Data /> */}
      {/* <Project /> */}
      {/* <Header /> */}
      {/* <ReactForm /> */}
      {/* <Images /> */}
      {/* <ContextHolder /> */}
      <LoginContext.Provider value={initialState}>
        <Login />
      </LoginContext.Provider>
      {/* </LoginProvider> */}
    </div>
  );
}
