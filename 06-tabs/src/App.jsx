import { useEffect, useState } from 'react'
import JobInfo from './JobInfo'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const newJobs = await response.json()
      setJobs(newJobs)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    )
  }

  return (
    <section className='jobs-center'>
      {/* btn container */}
      {/* job info */}
      <JobInfo jobs={jobs} />
    </section>
  )
}
export default App
