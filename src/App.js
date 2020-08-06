import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 26 },
      { name: 'Manu', age: 26 },
      { name: 'Steph', age: 26 }
    ]
  }
  switchNameHandler = () => {
    console.log("Clicked")
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} > And I play Hocky</Person>
      </div>
    );
  }
}

export default App;
