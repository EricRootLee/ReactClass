import React from 'react'
import Person from './Person/Person'


const persons = (props) => 
props.persons.map((e, index) => {
     return <Person
      key={index} 
      changed={(event) => props.changed(event, index)} 
      click={props.clicked(index)} 
      name={e.name} age={e.age} 
      > And I play Hocky</Person> })

export default persons 