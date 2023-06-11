import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleChange = (e) => {
    const input = e.target.value
    if (input > 8 || input < 1) {
      return
    }
    setCount(input)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newParagraph = data.slice(0, count)
    setText(newParagraph)
  }

  return (
    <div className='section-center'>
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor=''>Paragraphs:</label>
        <input type='number' value={count} onChange={handleChange} />
        <button type='submit' className='btn'>
          submit
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((paragraph) => {
          const id = nanoid()
          return (
            <p key={id} className='text'>
              {paragraph}
            </p>
          )
        })}
      </article>
    </div>
  )
}
export default App
