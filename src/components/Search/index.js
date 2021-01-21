import _ from 'lodash'
import './index.css'

const ProjectSearch = ({ handleSearch }) => {
  return (
    <div id="project-search">
      <span class="material-icons">search</span>
      <input
        type="text"
        placeholder="Search Project ..."
        onKeyUp={_.debounce(handleSearch, 300)}
      />
    </div>
  )
}

export default ProjectSearch
