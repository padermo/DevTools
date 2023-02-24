import React from 'react'
import empty from '../../assets/empty.svg'

function Empty({message}) {
  return (
    <div className='empty'>
      <figure className='empty__picture'>
        <img src={empty} alt="icon empty" className="empty__img" />
      </figure>
      <p>{message}</p>
    </div>
  )
}

export default Empty