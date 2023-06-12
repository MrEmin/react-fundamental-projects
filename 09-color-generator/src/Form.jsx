import { useState } from 'react'
import Values from 'values.js'
const Form = ({ setColors }) => {
  const [color, setColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setColors(new Values(`${color}`).all(10))
  }

  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button
          type='submit'
          className='btn'
          style={{ background: `${color}` }}
        >
          submit
        </button>
      </form>
    </section>
  )
}
export default Form