import React, { Component } from 'react'



class Person extends Component  {
    render(){
        return (
            <div>
                <p onClick={this.props.click} >Hello I am {this.props.name} and am {this.props.age} year old</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} type="text" value={this.props.name}/>
            </div>
        )
    }
   
}
export default Person 