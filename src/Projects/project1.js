import React, { Component } from 'react';
import ProjectItem from "./projectItem";


class Project extends Component {
  render() {
    let projectItem;
    projectItem = this.props.projects.map(project => {
      return (
        <ProjectItem key={project.title} project={project} />
      );
    });
    return (
      <div className="Project">
        <h3>Latest Projects</h3>
        {projectItem}
      </div>
    );
  }
}

export default Project;
