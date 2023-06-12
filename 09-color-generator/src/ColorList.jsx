import SingleColor from './SingleColor'

const ColorList = ({ colorList }) => {
  return (
    <div>
      <h2>ColorList</h2>
      {colorList.map((color, index) => {
        return <SingleColor key={index} color={color} />
      })}
    </div>
  )
}
export default ColorList
