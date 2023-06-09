const Categories = ({ categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button key={index} type='button' className='btn'>
          {category}
        </button>
      ))}
    </div>
  )
}
export default Categories
