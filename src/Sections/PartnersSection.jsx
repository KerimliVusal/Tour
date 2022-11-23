import React from 'react'
import { partners } from '../assets/images'
function PartnersSection() {
  return (
    <section className='Partner-section'>
      <div className="wrapper flex align-center j-center">
            {
              partners.map(partner=>(
                <div className='partner'>
                  <img src={partner} alt="" />
                </div>
              ))
            }
      </div>
    </section>
  )
}

export default PartnersSection