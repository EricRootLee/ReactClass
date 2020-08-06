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

  render() {
    return (
      <div className="App">
        <button>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} > And I play Hocky</Person>
      </div>
    );
  }
}

export default App;
