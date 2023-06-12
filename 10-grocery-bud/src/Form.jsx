import { useState } from 'react'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

const Form = ({ items, setItems }) => {
  const [item, setItem] = useState({
    name: '',
    id: '',
    isCompleted: false,
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!item.name) {
      return toast.warning('please enter a value.')
    }
    const newItem = {
      name: item.name,
      id: nanoid(),
      isCompleted: true,
    }
    setItems([...items, newItem])
    localStorage.setItem('name', `${item.name}`)
    toast.success('item added to list')
    setItem({ name: '', id: '', isCompleted: false })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={item.name}
        onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })}
      />
      <button type='submit'>submit</button>
    </form>
  )
}
export default Form
