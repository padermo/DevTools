import React from 'react'

function Alert({message}) {
  return (
    <div className='alert'>
      <div className="alert__content">
        <h2>{message}</h2>
      </div>
    </div>
  )
}

export default Alert