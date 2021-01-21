import React from 'react'
import ProjectCard from '../ProjectCard'
import './index.css'

const ProjectList = ({ projects }) => {
  return (
    <div id="project-list">
      {projects.map((project) => (
          <li key={project.title}>
        <ProjectCard project={project} />
        </li>
      ))}
    </div>
  )
}


export default ProjectList
