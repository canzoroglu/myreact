import React, { Component } from 'react';
import Project from "./Projects/project1"
import AddProject from "./Projects/addProject"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    };
  }
  componentWillMount(){
    this.setState({
      projects: [
        {title: "Bussiness", category: "Web Design"},
        {title: "Social", category: "Web Development"},
        {title: "E-commerce", category: "Mobile Design"}
      ]
    });
  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Project projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
