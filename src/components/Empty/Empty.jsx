import React from 'react'
import empty from '../../assets/empty.svg'

function Empty() {
  return (
    <div className='empty'>
      <figure className='empty__picture'>
        <img src={empty} className="empty__img" />
      </figure>
      <p>Empty Data</p>
    </div>
  )
}

export default Empty