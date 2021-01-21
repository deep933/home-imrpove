import { useEffect, useState } from 'react'

const useProjectFilter = api => {
  const [API] = useState(api)
  const [error, setError] = useState()
  const [projects, setProjects] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async url => {
      try {
        const response = await fetch(url)
        const data = await response.json()

        if (response.status === 200) {
          setProjects(data.projects)
        } else {
          setError(response)
        }
        if (response) {
          setIsLoading(false)
        }
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }

    if (API) {
      //latency test
      setTimeout(() => {
        fetchData(API)
      }, 2000)
    }
  }, [API])

  return [projects, error, isLoading]
}

export default useProjectFilter
