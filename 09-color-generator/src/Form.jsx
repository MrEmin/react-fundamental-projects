import { useState } from 'react'
import Values from 'values.js'
import ColorList from './ColorList'
const Form = () => {
  const [color, setColor] = useState('#ffffff')

  const handleChange = (e) => {
    setColor(e.target.value)
  }
  console.log(color)
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const colorList = new Values(color).all(10)

  return (
    <div className='container'>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          name=''
          id=''
          value={color}
          onChange={handleChange}
        />
        <input type='text' name='' id='' />
        <button type='submit' className='btn'>
          submit
        </button>
      </form>
      <ColorList colorList={colorList} />
    </div>
  )
}
export default Form
