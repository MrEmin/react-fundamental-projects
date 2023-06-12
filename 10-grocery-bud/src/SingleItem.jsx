import { useState } from 'react'

const SingleItem = ({ item, removeItem }) => {
  const { name, id, isCompleted } = item
  const [isChecked, setIsChecked] = useState(isCompleted)
  return (
    <div>
      <input
        style={{ cursor: 'pointer' }}
        type='checkbox'
        onClick={() => setIsChecked(!isChecked)}
      />
      <h2 style={{ textDecoration: isChecked ? 'none' : 'line-through' }}>
        {name}
      </h2>
      <button type='button' className='btn' onClick={() => removeItem(id)}>
        delete
      </button>
    </div>
  )
}
export default SingleItem
