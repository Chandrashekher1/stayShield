import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex justify-between mx-16 py-2'>
        <p>StayShield</p>
        <div>
            <Navbar/>
        </div>
    </div>
  )
}

export default Header