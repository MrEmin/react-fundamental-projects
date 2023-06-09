const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button
          type='button'
          className='btn'
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
export default Categories
