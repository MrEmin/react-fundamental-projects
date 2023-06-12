import Form from './Form'
import ColorList from './ColorList'
import Values from 'values.js'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  // for the rate of increase of hue: .all(10) => here the hue will increase by 10%
  const [colors, setColors] = useState(new Values('#f15025').all(10))
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <main>
      <Form addColor={addColor} setColors={setColors} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  )
}
export default App
