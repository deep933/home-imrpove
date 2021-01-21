import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import ProjectSearch from '../components/Search'
import ProjectList from '../components/ProjectList'
import useProjects from '../hooks/useProjects'
import { config } from '../_helper/config'
import Tabbar from '../components/Tabbar'
import useFilter from '../hooks/useFilter'
import NoResultFound from '../components/NoResultFound'
import ErrorMessage from '../components/ErrorMessage'

const Dashboard = () => {
  const [projects, error, isLoading] = useProjects(config.api)
  const [
    filteredProjects,
    handleSearch,
    setProjects,
    handleTabChange,
  ] = useFilter()

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
