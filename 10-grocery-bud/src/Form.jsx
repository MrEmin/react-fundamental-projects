import { useState } from 'react'

import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItemName) {
      toast.error('please provide value.')
      return
    }
    addItem(newItemName)
    setNewItemName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className='form-control'>
        <input
          className='form-input'
          type='text'
          name='name'
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className='btn' type='submit'>
          add item
        </button>
      </div>
    </form>
  )
}
export default Form
