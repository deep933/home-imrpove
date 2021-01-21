import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import ProjectSearch from '../components/Search'
import ProjectList from '../components/ProjectList'
import Tabbar from '../components/Tabbar'
import NoResultFound from '../components/NoResultFound'
import ErrorMessage from '../components/ErrorMessage'
import useProjectFilter from '../hooks/useProjectFilter'
import { config } from '../_helper/config'

const Dashboard = () => {
  const [projects, error, isLoading] = useProjectFilter(config.api)
  const [
    filteredProjects,
    handleSearch,
    setProjects,
    handleTabChange
  ] = useProjectFilter()

  useEffect(() => {
    if (projects) {
      setProjects(projects)
    }
  }, [projects])

  return (
    <div id="dashboard" className="flex-col">
      <div className="container">
        <ProjectSearch handleSearch={handleSearch} />
        <Tabbar
          tabs={['All', 'Active', 'Hold', 'Completed']}
          activeTab={'All'}
          handleTabChange={handleTabChange}
        />
        {isLoading && <Loading />}

        {!isLoading &&
          filteredProjects &&
          (filteredProjects.length === 0 ? (
            <NoResultFound />
          ) : (
            <ProjectList projects={filteredProjects} />
          ))}
        {!isLoading && error && <ErrorMessage />}
      </div>
    </div>
  )
}

export default Dashboard
