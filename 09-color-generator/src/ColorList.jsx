import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

const ColorList = ({ colors }) => {
  const length = Math.floor(colors.length / 2)
  return (
    <section className='colors'>
      {colors.map((color, index) => {
        return (
          <SingleColor
            key={nanoid()}
            length={length}
            color={color}
            index={index}
          />
        )
      })}
    </section>
  )
}
export default ColorList
