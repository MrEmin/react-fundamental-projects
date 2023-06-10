const BtnContainer = ({ jobs }) => {
  return (
    <div className='btn-container'>
      {jobs.map((item) => (
        <button key={item.id} type='button' className='job-btn'>
          {item.company}
        </button>
      ))}
    </div>
  )
}
export default BtnContainer
