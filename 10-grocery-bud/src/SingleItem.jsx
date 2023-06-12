import { useState } from 'react'

const SingleItem = ({ item, removeItem }) => {
  const { name, id, isCompleted } = item
  const [isChecked, setIsChecked] = useState(isCompleted)
  return (
    <div className='single-item'>
      <input
        style={{ cursor: 'pointer' }}
        type='checkbox'
        onClick={() => setIsChecked(!isChecked)}
      />
      <p style={{ textDecoration: isChecked ? 'none' : 'line-through' }}>
        {name}
      </p>
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
