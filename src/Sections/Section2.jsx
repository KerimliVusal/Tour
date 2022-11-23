import React from 'react'
import { Tours } from '../assets/images'
function Section2() {
  return (
    <section className='Tours-section'>
      <div className="wrapper">
        <div className='section-head'>
        <h1 className='section-title'>Top Tours For You</h1>
        <p>Much places for your vibes from  Azerbaijan</p>
        </div>
        
        <div className='flex'>
           <div className='flex' style={{width:"50%"}}>
           {
              Tours.slice(0,3).map(image=>(
                <div className='tour-item' style={{height:`${image.height}px`,width:`${image.width}`}}>
                  <img src={image.img} alt="" />
                  <p className='tour-name'>{image.name}</p>
                  <p className='tour-price'>{image.price} <span>{image.perPerson}</span></p>
                </div>
              ))
            }
           </div>
           <div  className='flex' style={{width:"50%"}}>
           {
              Tours.slice(3,5).map(image=>(
                <div className='tour-item' style={{height:`${image.height}px`,width:`${image.width}`}}>
                  <img src={image.img} alt="" />
                  <p className='tour-name'>{image.name}</p>
                  <p className='tour-price'>{image.price} <span>{image.perPerson}</span></p>
                </div>
              ))
            }
           </div>
           <button className='View-more-btn'>View All Tours</button>
        </div>
      </div>
    </section>
  )
}

export default Section2