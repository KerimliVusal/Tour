import React from 'react'
import { posts } from '../assets/images'
import instaIcon from '../assets/images/insta.svg'
function Section4() {
  return (
    <section className='posts-section'>
      <div className="wrapper">
      <div className='section-head'>
        <h1 className='section-title'>Like it was last time</h1>
        <p>Adventures our customers</p>
        </div>

        <div className="posts flex j-between">
              {
                posts.map(imgBlock=>(
                  <div className='postBlock' >
                      <a href='https://www.instagram.com/' className='post'><img src={imgBlock.img1} alt="" /><a href="#df" className='postIcon'><img src={instaIcon} alt="" /></a></a>
                      <a href='https://www.instagram.com/' className='post'><img src={imgBlock.img2} alt="" /><a href="#df"className='postIcon'><img src={instaIcon} alt="" /></a></a>
                  </div>
                ))
              }
        </div>
      </div>
    </section>
  )
}

export default Section4