// import React, { Component } from 'react'

// export class EmployeeRetrivel extends Component {

//     empList=["hi"]

//     render() {
//         console.log("render");
//         return (
//             <div>
//                  {this.empList[0]}
           
//               <button onClick={()=>{
//                     this.empList[0]="123";
//               } }> click</button>
//             </div>
//         )
//     }
// }

// export default EmployeeRetrivel

import React, { Component } from 'react'
import EmployeeList from './EmployeeList';

export class EmployeeRetrivel extends Component {

    state={
    empList:[
        {name:"aaa",age:23,city:"Chennai"},
        {name:"bbb",age:23,city:"Mumbai"},
        {name:"ccc",age:23,city:"Bglr"}
    ]
    }

    render() {
        console.log("render");
     //   {this.state.empList=[]} not done
        return (
            <div>
              
              {this.state.empList.length>0?
              <EmployeeList empData={this.state.empList}/>
        //        <> {this.state.empList.map(
        //        (item,index)=>{
        //             return <h1 key={index}>{item.name} - {item.city}</h1>
        //        }
        //    )} </>
           : <ErrorMessage/>}
                
         
             <button onClick={()=>{
                    this.setState({ empList: []})
              } }> click</button>
           
            </div>
        )
    }
}

const ErrorMessage=()=>(<h1>No data available!!!</h1>)

export default EmployeeRetrivel
