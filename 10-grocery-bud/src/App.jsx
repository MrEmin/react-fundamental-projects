import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }

    setItems([...items, newItem])
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    toast.success('item deleted from list')
  }

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form items={items} setItems={setItems} addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  )
}

export default App