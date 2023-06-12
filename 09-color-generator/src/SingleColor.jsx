const SingleColor = ({ color, index }) => {
  const { hex, weight } = color
  console.log(color)
  return (
    <article
      className={index > 10 ? 'color-light color' : 'color'}
      style={{
        background: `#${hex}`,
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  )
}
export default SingleColor
