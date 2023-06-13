const SingleItem = ({ item, removeItem, editItem }) => {
  const { name, id, completed } = item
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p style={{ textDecoration: completed && 'line-through' }}>{name}</p>
      <button
        type='button'
        className='remove-btn btn'
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem
