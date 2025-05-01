import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='flex py-2'>
            <li className='mx-4 cursor-pointer py-2 font-semibold text-lg hover:underline'>Properties</li>
            <li className='mx-4 cursor-pointer py-2 font-semibold text-lg hover:underline'>How It Works</li>
            <li className='mx-4 cursor-pointer py-2 font-semibold text-lg hover:underline'>Services</li>
            <li className='mx-4 cursor-pointer py-2 font-semibold text-lg hover:underline'>FAQs</li>
            <button className='mx-4 cursor-pointer border px-4 py-2 rounded-lg font-semibold text-gray-900 hover:bg-black hover:text-white'>Log In</button>
            <button className='mx-4 cursor-pointer border px-4 py-2 rounded-lg font-semibold bg-blue-800 text-white hover:bg-blue-700 font-semibold hover:text-white'>Sign Up</button>
        </ul>
    </div>
  )
}
 
export default Navbar