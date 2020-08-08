import React, { Component } from 'react'
import Person from './Person/Person'


class Persons extends Component {
constructor(props){
   super(props) 
}

componentWillReceiveProps(){

}

shouldComponentUpdate(){}

    render() {
        return this.props.persons.map((e, index) => {
            return <Person
                key={index}
                changed={(event) => this.props.changed(event, index)}
                click={this.props.clicked(index)}
                name={e.name} age={e.age}
            > And I play Hocky</Person>
        })
    }
}


export default Persons 