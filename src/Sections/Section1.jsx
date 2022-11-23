import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../index.css';

// Import Swiper styles
import 'swiper/css';
import { Images } from '../assets/images';
import { Navigation,Scrollbar } from "swiper";
import { useState } from 'react';

function Section1() {
 const [currentSlide,setCurrentSlide]=useState(1);
  return (
    <section className='Explore-section'>
        <div className="wrapper p-relative h-100" >
          <div className='Section1-text'>
                <h1 className='title'>Explore Azerbaijan</h1>
                {/* <span className='color-ink sub-word'><a href="#df">Services</a></span>
                {/* <ul className='flex color-ink sub-links'>
                    <li className='mr-80'><a href="#df">Transfer</a></li>
                    <li className='mr-80'><a href="#df">Tour</a></li>
                    <li className='mr-80'><a href="#df">Visa</a></li>
                </ul> */} 
          </div>

          <div className='Slider'>
                <Swiper
                className='p-relative'
                  slidesPerView={2}
                  spaceBetween={80}
                  // centeredSlides={true}
                  loop={true}
                  navigation={true}
                  modules={[ Navigation,Scrollbar]}
                  onNavigationNext={()=>{currentSlide===4?setCurrentSlide(1):setCurrentSlide(currentSlide+1)}}
                  onNavigationPrev={()=>{currentSlide===1?setCurrentSlide(4): setCurrentSlide(currentSlide-1)}}
                  scrollbar={{  draggable: true }}
                  mousewheel={true}
                  >
                     <div className='Slide-pagination'>{currentSlide}/{Images.length}</div>
                      {
                        Images.map(img=>(
                          <SwiperSlide className='Slider-item'>
                            <img src={img} alt="" />
                          </SwiperSlide>
                        ))
                      }
                </Swiper>
                <div className='drag-btn'>drag</div>
          </div>
        </div>
    </section>
  )
}

export default Section1