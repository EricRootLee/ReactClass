import React, { Component } from 'react';
import './App.css';
import '../components/Persons/Person/Person.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      person: [
        { name: 'Max', age: 26 },
        { name: 'Manu', age: 26 },
        { name: 'Steph', age: 26 }
      ],
      showPersons: false
    }
  }


  componentWillMount() {
    console.log("Comp will mount")
  }

  componentDidMount() {
    console.log("comp DId mount")
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
  deletePerson = (index) => {
    // const  mtu = this.state.person.slice()
    const mtu = [...this.state.person]
    mtu.splice(index, 1)
    this.setState({ person: mtu })
  }
  nameChangedHandler = (event, id) => {
    //  const personIndex = this.state.person.findIndex(p => { return p.id === id })
    let guy = { ...this.state.person[id] }
    guy.name = event.target.value;
    let people = [...this.state.person]
    people[id] = guy
    this.setState({
      person: people
    })
  }
  tooglePersonHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show })
  }
  render() {
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.person}
            clicked={this.deletePerson}
            changed={this.nameChangedHandler} />
        </div>
      );
    }
    const styles = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      cursor: 'pointer'
    }
    let classes = ['red', 'bold'].join(' ');
    return (
      <div className="App">

        <Cockpit styles={styles} classes={classes} tooglePersonHandler={this.tooglePersonHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
