import React,{useState} from 'react'

export default function EmpRetrievelFunction() {

    const [empList,setEmpList]=useState([
        {name:"aaa",age:23,city:"Chennai"},
        {name:"bbb",age:23,city:"Mumbai"},
        {name:"ccc",age:23,city:"Bglr"}
    ])


    return (
        <div>
            {
                 empList.map(
                    (item,index)=>{
                        return <h1 key={index}>{item.name} - {item.city}</h1>
                    }
                )
            }
        </div>
    )
}
