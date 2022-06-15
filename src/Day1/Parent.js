import  React, { Component } from 'react'
import { Child } from './Child';

export class Parent extends Component {
    age=90;
    render() {
       const name='ajay';
       
        return (
            <div>
                <Child n={name} a={this.age}/>
                <Child n={'hi'} a={24}/>
                <Child n={'welcome'} a={56}/>
            </div>
        )
    }
}

export default Parent;
