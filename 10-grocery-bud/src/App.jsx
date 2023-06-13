import { useEffect, useState } from 'react'
import Form from './Form'
import Items from './Items'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'

/* const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
    console.log(list)
  } else {
    list = []
  }
  return list
} */

const getLocalStorage = () => JSON.parse(localStorage.getItem('list') || '[]')

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const App = () => {
  const [items, setItems] = useState(getLocalStorage)

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocalStorage(newItems)
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
