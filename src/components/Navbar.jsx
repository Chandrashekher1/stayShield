import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='flex '>
            <li className='mx-4'>Properties</li>
            <li className='mx-4'>How It Works</li>
            <li className='mx-4'>Services</li>
            <li className='mx-4'>FAQs</li>
            <button className='mx-4'>Login</button>
            <button>Sign Up</button>
        </ul>
    </div>
  )
}

export default Navbar