import EffortsInfo from '../EffortsInfo'
import './index.css'

const ProjectCard = ({ project }) => {
  const convertUnixToDays = unix => {
    const oneDay = 24 * 60 * 60 * 1000
    const d1 = unix * 1000
    const todayDate = new Date().getTime()
    const diff = todayDate - d1
    return `${Math.round(diff / oneDay)} days ago`
  }

  return (
    <div className="project-card">
      <div className="card-header">
        <h1>{project.title}</h1>
        <div className={'tag ' + project.status}>{project.status}</div>
      </div>
      <div className="card-content">
        <div className="tag-list">
          <div className="tag icon-tag">
            <span class="material-icons">person</span>
            {project.manager}
          </div>
          <div className="tag icon-tag">
            <span class="material-icons">calendar_today</span>
            {convertUnixToDays(project.createdOn)}
          </div>
        </div>
        <p>{project.description}</p>
        <EffortsInfo efforts={project.analytics.efforts} />
      </div>
    </div>
  )
}

export default ProjectCard
