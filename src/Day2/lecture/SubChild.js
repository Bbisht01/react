import  React, {Component } from 'react'


export class SubChild extends Component {
    render() {
        return (
            <div>
               in Sub Child 
               <b> {this.props.name}</b>
            </div>
        )
    }
}

export default SubChild;
