import React from 'react'
import './header.css'
function Header1() {
  return (
   <div className='d-flex header-container  bg-third flex-row justify-content-between'>
    <div className='d-flex align-items-center'>
        <span className='mx-2 header-size'>$USD </span>{" "}
        <span className='header-size'>English</span>
    </div>
    <div>
        <span className='mx-2 header-size'>956754484</span>
    </div>
   </div>
  )
}

export default Header1