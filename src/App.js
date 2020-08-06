import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css'

class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 26 },
      { name: 'Manu', age: 26 },
      { name: 'Steph', age: 26 }
    ]
  }
  switchNameHandler = (newName) => {
    console.log("Clicked")
    this.setState({
      person: [
        { name: newName, age: 26 },
        { name: 'Manu', age: 26 },
        { name: 'Steph', age: 26 }
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: 'Max', age: 26 },
        { name: event.target.value, age: 26 },
        { name: 'Steph', age: 26 }
      ]
    })
  }

  render() {

const styles= {
  backgroundColor:'blue'
}
    return (
      <div className="Person">
        <button style={styles} onClick={this.switchNameHandler.bind(this, 'Sanda')} >Switch Name</button>
        <Person changed={this.nameChangedHandler}  click={this.switchNameHandler} name={this.state.person[0].name} age={this.state.person[0].age} > And I play Hocky</Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} > And I play Hocky</Person>
      </div>
    );
  }
}

export default App;
