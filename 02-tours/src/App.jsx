import { useEffect, useState } from 'react'

import Tours from './components/Tours'
import Loading from './components/Loading'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        setIsError(true)
        setIsLoading(false)
        return
      }
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (isError) {
    return (
      <main className='title'>
        <h2>Error!</h2>
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button
            type='button'
            style={{ marginTop: '2rem' }}
            className='btn'
            onClick={() => fetchTours()}
          >
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
