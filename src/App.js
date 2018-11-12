import React, { Component } from 'react';
import Project from "./Projects/project1"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {title: "Bussiness", category: "Web Design"},
        {title: "Social", category: "Web Development"},
        {title: "E-commerce", category: "Mobile Design"}
      ]
    };
  }
  render() {
    return (
      <div className="App">
        My React App
        <Project projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
