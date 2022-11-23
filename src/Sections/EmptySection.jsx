import React from 'react'
import shadow from '../assets/images/shadow.png'
function EmptySection() {
  return (
    <div className='mountain-section'>
      <h1 className='heading'>call to action</h1>
       <img src={shadow} className="shadow" alt="" />
    </div>
  )
}

export default EmptySection