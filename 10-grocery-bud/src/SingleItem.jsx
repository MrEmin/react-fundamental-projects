import { useState } from 'react'

const SingleItem = ({ item, removeItem }) => {
  const { name, id, completed } = item
  const [isChecked, setIsChecked] = useState(completed)
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={(e) => setIsChecked(!isChecked)}
      />
      <p style={{ textDecoration: isChecked && 'line-through' }}>{name}</p>
      <button
        type='button'
        className='remove-btn btn'
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem
