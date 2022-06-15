import  React, { Component } from 'react'


export class Child extends Component {
    render() {
        return (
            <div>
                hi {this.props.n} {this.props.a?this.props.a:0 }
            </div>
        )
    }
}

export default Child;
