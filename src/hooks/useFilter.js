import { useEffect, useState } from 'react'
import _ from 'lodash'

const useFilter = () => {
  const [projects, setProjects] = useState()
  const [filteredProjects, setFilteredProjects] = useState()
  const [query, setQuery] = useState()
  const [activeTab, setActiveTab] = useState('all')

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }

  const handleTabChange = (tab) => {
    setActiveTab(_.toLower(tab))
  }

  useEffect(() => {
    const q = _.trim(_.toLower(query))
    if (projects) {
      setFilteredProjects(
        projects.filter(
          (project) =>
            (_.startsWith(_.toLower(project.title), q) ||
              _.startsWith(_.toLower(project.manager), q)) &&
            (_.isEqual(project.status, activeTab) || activeTab === 'all')
        )
      )
    }
  }, [query, projects])

  useEffect(() => {
    console.log(filteredProjects)
  }, [filteredProjects])

  useEffect(() => {
    if (projects) {
      setFilteredProjects(
        projects.filter(
          (project) =>
            _.isEqual(project.status, activeTab) || activeTab === 'all'
        )
      )
    }
  }, [activeTab])

  return [filteredProjects, handleSearch, setProjects, handleTabChange]
}
export default useFilter
