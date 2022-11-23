import React from 'react'

function Footer() {
  return (
    <div className='footer'>
     <div className="wrapper flex">
        <div className='column1'>
            <h1 className='footer-head'>Newsletter</h1>
            <div className='input-group'>
              <input type="text" placeholder='Name' name="" id="" />
              <input type="email" placeholder='Email' name="" id="" />
              <button>Subscribe</button>
            </div>
        </div>
        <div className='column2'>
          <ul className='flex'>
            <li className='column2-1'>
              <h3>Menu</h3>
                <ul>
                  <li><a href='#df'>Home</a></li>
                  <li><a href='#df'>Tours</a></li>
                  <li><a href='#df'>Category</a></li>
                  <li><a href='#df'>About Us</a></li>
                </ul>
            </li>
            <li className='column2-1'>
              <h3>Booking Plan</h3>
                <ul>
                  <li><a href='#df'>Personal Trip </a></li>
                  <li><a href='#df'>Couple Trip </a></li>
                  <li><a href='#df'>Group Trip </a></li>
                </ul>
            </li>
            <li className='column2-1'>
              <h3>Support</h3>
                <ul>
                  <li><a href='#df'>FAQ</a></li>
                  <li><a href='#df'>Terms & Conditions</a></li>
                  <li><a href='#df'>Privacy Policy</a></li>
                </ul>
            </li>
          </ul>
      </div>
     </div>
     <div className='bottom-footer'>
      <div className="wrapper">
        <ul className='footer-links flex'>
          <li>
            <ul className='flex sub-footer-links'>
              <li><a href="#df">Facebook</a>/</li>
              <li><a href="#df"> Instagram</a>/</li>
              <li><a href="#df">Twitter</a></li> 
            </ul>
          </li>
          <li>
            <p>2021 (c) — Toureast. All Rights Reserved</p>
          </li>
          <li><p>+994 50 222 22 22 {'\u00A0'}  / {'\u00A0'}  hello@toureast.az  {'\u00A0'} / {'\u00A0'}  Azadlig 108</p></li>
        </ul>
      </div>
     </div>
    </div>
  )
}

export default Footer