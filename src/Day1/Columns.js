import React,{Fragment,Component} from 'react';
export default class Columns extends Component {
    render() {
      return (
        // <div>
        <Fragment>
          <td>Hello</td>
          <td>World</td>
          </Fragment>
        // </div>
      );
    }
  }

  export const appName="Clayfin app";

  export const search=()=>{
      //logic
        console.log('searching');
  }