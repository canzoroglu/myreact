import React, { Component } from 'react';
import PeopleList from "./Components/PeopleList";
import AddPeople from "./Components/AddPeople";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [
        {name: "Ali", age: 21, profession: "builder", id: 1},
        {name: "John", age: 30, profession: "mechanic", id: 2},
        {name: "Hans", age: 34, profession: "journalist", id: 3}
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(person){
    this.setState(state => {
      state.people.push(person);
      return state;
    });
  }
  handleDelete(id){
    const people = this.state.people.filter(person => person.id !== id);
    this.setState({people,});
  }
  render(){
    return (
      <div>
        <PeopleList onDelete={this.handleDelete} people={this.state.people} />
        <AddPeople people={this.state.people} onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
