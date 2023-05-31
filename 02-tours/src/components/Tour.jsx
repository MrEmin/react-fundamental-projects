import { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  console.log(info.substring(0, 10))
  return (
    <article className='single-tour'>
      <img className='img' src={image} alt={name} />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type='button'
            className='info-btn'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>

        <button
          className='btn btn-block delete-btn'
          onClick={() => removeTour(id)}
        >
          Not Intersted
        </button>
      </div>
    </article>
  )
}
export default Tour
