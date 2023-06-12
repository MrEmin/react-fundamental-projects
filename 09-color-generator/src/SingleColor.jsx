const SingleColor = ({ color, index, length }) => {
  const { hex, weight } = color
  return (
    <article
      className={index > length ? 'color-light color' : 'color'}
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
