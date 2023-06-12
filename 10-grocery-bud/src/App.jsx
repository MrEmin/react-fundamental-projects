import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const [items, setItems] = useState([])

  const removeItem = (id) => {
    const newList = items.filter((item) => item.id !== id)
    setItems(newList)
    toast.error('item deleted from list')
  }

  return (
    <main>
      <h2>Grocery Bud - Starter</h2>
      <Form items={items} setItems={setItems} />
      <Items items={items} removeItem={removeItem} />
      <ToastContainer position='top-center' />
    </main>
  )
}

export default App
