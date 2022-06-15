import React from 'react';

import Table from './Table';
import { appName, search } from './Columns';
import { Parent } from './Parent';

// const App=()=>(
//  <div> <h1>hi</h1>
//   <h1>hello</h1></div>
// );
 const App=()=>{
  return (
         <div>
           <h1>{search()}</h1>
          <h1>{appName}</h1>
          {/* <Table /> */}
          <Parent/>
        </div>
  );
}
export default  App;
// export default function App() {
//   return (
//     <div>
//       <h1>{search()}</h1>
//       <h1>{appName}</h1>
//       <Table />
//     </div>
//   );
// }
// class App extends React.Component{

//   render(){
//     return (
//       <div>
//         <h1>{search()}</h1>
//         <h1>{appName}</h1>
//         <Table/>
//         </div>

//     );
//   }
// }

