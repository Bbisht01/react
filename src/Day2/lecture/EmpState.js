import React, { useState } from 'react'

export default function EmpState() {
    const nameChangeHandler=()=>{
        setName("aaaaa");
    }
    const ageChangeHandler=()=>{
        setAge(23);
    }

    const userNameChangeHandler=()=>{
        setUser({...user,name:"bbbb"});
    }
    const userAgeChangeHandler=()=>{
        setUser({...user,age:12});
    }
    const [name,setName]=useState('');
    const [age,setAge]=useState(0);
    const [user,setUser]=useState({name:'dummy',age:0});
 //   const [user,setUser]=useState({});
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={nameChangeHandler}>change Name</button>
            <h1>{age}</h1>
            <button onClick={ageChangeHandler}>change Name</button>

            {user.name} {user.age}
            <button onClick={userNameChangeHandler}>change user name</button>
            <button onClick={userAgeChangeHandler}>change user age</button>
        </div>
    )
}
