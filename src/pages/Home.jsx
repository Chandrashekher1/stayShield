import React from 'react'

const Home = () => {
  return (
    <div className='bg-blue-50 border border-t-transparent'>
      <div className='mx-16 my-16 flex justify-around'>
      <div className='w-[40%] my-24'>
        <h1 className='font-bold text-5xl text-blue-700 '>Smarter Rental Secure By Technology</h1>
        <p className='my-8 text-xl text-gray-600'>SmartRental combines AI and blockchain to make renting safer, smarter, and more transparent for both tenants and landlords.</p>
        <div className='my-16'>
          <button className='border py-3 px-6 rounded-lg bg-blue-700 text-white font-semibold cursor-pointer hover:bg-blue-600'>Find Properties</button>
          <button className='border border-gray-600 mx-4 py-3 px-6 rounded-lg font-semibold cursor-pointer hover:bg-gray-200'>How It Works</button>
          <div className='flex my-16'>
            <p className='font-bold text-lg mx-4'>Smart Contrats</p>
            <p className='font-bold text-lg mx-4'>AI Verification</p>
            <p className='font-bold text-lg mx-4'>Rental Score</p>
          </div>
        </div>
      </div>
      <div>
        <div className='shadow-xl rounded-lg p-6 py-12 bg-white'>
          <img src="https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo=" 
            alt="" 
            className='rounded-lg'
            />
          <div>
            <h1 className='font-semibold text-xl mt-4'>Modern Downtown Apartment</h1>
            <p className='mt-2 text-gray-700 font-semibold'>New Delhi</p>
          </div>
          <div>
            <div className='flex justify-between'>
            <section className='my-2'>
              <p>Rent</p>
              <h1 className='font-bold text-blue-700'>₹18,000/mo</h1>
            </section>
            <h2>Verified</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home