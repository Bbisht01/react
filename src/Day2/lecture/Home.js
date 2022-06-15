import React from 'react';

// export default function Home(props) {
//     return (
//         <div>
//             {props.num1} {props.num2}
//         </div>
//     )
// }

export default function Home({num1,num2}) {
    return (
        <div>
            {num1} {num2} 
            {/* {10/0.0}
                {'abc'**2} */}
        </div>
    )
}

// Parent -- n1, n1 ,op
//<calc> pass num1 and numb2 op
// in calc do the operation