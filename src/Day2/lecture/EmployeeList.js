import React from 'react';

function EmployeeList(props){   
   return (
        props.empData.map(
            (item,index)=>{
                return <h1 key={index}>{item.name} - {item.city}</h1>
            }
        )
   );
}
export default EmployeeList;
// {props.empList.map(
//     (item,index)=>{
//           return <h1 key={index}>{item.name} - {item.city}</h1>
//      }
// )} }