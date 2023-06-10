const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => (
        <button
          key={item.id}
          onClick={() => setCurrentItem(index)}
          type='button'
          className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
        >
          {item.company}
        </button>
      ))}
    </div>
  )
}
export default BtnContainer
