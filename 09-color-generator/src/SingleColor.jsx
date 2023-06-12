const SingleColor = ({ color }) => {
  const { hex, weight } = color
  return (
    <div>
      <div style={{ width: '100px', height: '100px', background: `#${hex}` }}>
        <p>{weight}%</p>
        <p>#{hex}</p>
      </div>
    </div>
  )
}
export default SingleColor
