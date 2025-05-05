import React from 'react'
import { useNavigate } from "react-router";
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const navigate = useNavigate()

  const handleMore = () => {
    navigate('/How-it-works')
  }

  return (
    <>
        <div className='bg-blue-50 border-t border-t-transparent'>
      <div className='mx-16 my-16 flex justify-around'>
      <div className='w-[40%] my-24'>
        <h1 className='font-bold text-5xl text-blue-700 '>StayShield Secure By Technology</h1>
        <p className='my-8 text-xl text-gray-600'>stayshield combines AI and blockchain to make renting safer, smarter, and more transparent for both tenants and landlords.</p>
        <div className='my-16'>
          <button className='border py-3 px-6 rounded-lg bg-blue-700 text-white font-semibold cursor-pointer hover:bg-blue-600' onClick={() => navigate('/properties')}>Find Properties</button>
          <button className='border border-gray-600 mx-4 py-3 px-6 rounded-lg font-semibold cursor-pointer hover:bg-gray-200' onClick={() => navigate('/How-it-works')}>How It Works</button>
          <div className='flex my-16'>
            <p className='font-bold text-lg mx-4'>Smart Contrats</p>
            <p className='font-bold text-lg mx-4'>AI Verification</p>
            <p className='font-bold text-lg mx-4'>Rental Score</p>
          </div>
        </div>
      </div>
      <div>
        <div className='shadow-xl rounded-lg p-6 py-8 bg-white'>
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

    <div className='bg-gray-50 py-8 -mt-16'>
      <h1 className='font-bold text-3xl text-center '>How StayShield Works</h1>
      <p className='text-gray-700 text-xl my-8 text-center '>Our platform combines cutting-edge AI and blockchain technology to create a transparent and secure rental process for everyone involved.</p>

      <div className='flex mx-16 my-16'>
        <div className='border p-8 w-[40%] mx-8 border-gray-300 rounded-md hover:shadow-md shadow-blue-400'>
          <h1 className='font-semibold text-3xl my-4'>1. Property Documentation</h1>
          <p className='text-gray-500 text-xl'>Landlords upload detailed images and property information. These are stored securely on the blockchain as a verifiable record of condition.</p>
        </div>
        <div className='border p-8 w-[40%] mx-8 border-gray-300 rounded-md hover:shadow-md shadow-blue-400'>
          <h1 className='font-semibold text-2xl my-4'>2. Smart Contract Agreement</h1>
          <p className='text-xl text-gray-500'>Rental agreements are created as smart contracts on the blockchain, including deposit terms and conditions that execute automatically.</p>
        </div>
        <div className='border p-8 w-[40%] mx-8 border-gray-300 rounded-md hover:shadow-md shadow-blue-400'>
          <h1 className='font-semibold text-3xl my-4'>3. AI Condition Verification</h1>
          <p className='text-gray-600 text-xl'>Upon move-out, our AI compares before and after images to fairly assess property condition and determine appropriate deposit returns.</p>
        </div>
      </div>
      <p className='text-center border mx-[45%] cursor-pointer px-4 py-2 rounded-lg hover:bg-black hover:text-white font-semibold' onClick={handleMore}>Learn More →</p>

    </div>

    <div className='bg-blue-50 p-8 py-16'>
      <h1 className='text-center text-4xl font-bold'>Featured Properties</h1>
      <p className='text-center my-4 text-2xl text-gray-600'>Browse our selection of verified properties with smart contract protection</p>

      <div className='flex flex-wrap mx-36'>
        <div className='border border-gray-100 w-1/4 rounded-lg  my-8 p-4 shadow-blue-200 hover:shadow-xl bg-gray-50'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5GT0-NRp4PwNihPjzG4_bbE3KL9TOdqkPw&s" 
            alt="" 
            className='w-full object-contain cursor-pointer rounded-lg'
              />
          <section className='flex justify-between mx-4 my-2'>
            <h1 className='text-lg font-semibold'>Modern DownTown Apartment</h1>
            <h1 className='font-semibold text-gray-600'>₹18500/mo</h1>
          </section>
          <p className='text-gray-600 mx-4 my-2'>New Delhi</p>
          <section className='flex'>
            <p className='mx-4'>2 bed</p>
            <p>2 bath</p>
          </section>
        </div>
        <div className='border border-gray-100 w-1/4 rounded-lg mx-4 my-8 p-4 shadow-blue-200 hover:shadow-xl bg-gray-50'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5GT0-NRp4PwNihPjzG4_bbE3KL9TOdqkPw&s" 
            alt="" 
            className='w-full object-contain cursor-pointer rounded-lg'
              />
          <section className='flex justify-between mx-4 my-2'>
            <h1 className='text-lg font-semibold'>Modern DownTown Apartment</h1>
            <h1 className='font-semibold text-gray-600'>₹18500/mo</h1>
          </section>
          <p className='text-gray-600 mx-4 my-2'>New Delhi</p>
          <section className='flex'>
            <p className='mx-4'>2 bed</p>
            <p>2 bath</p>
          </section>
        </div>
        <div className='border border-gray-100 w-1/4 rounded-lg mx-4 my-8 p-4 shadow-blue-200 hover:shadow-xl bg-gray-50'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5GT0-NRp4PwNihPjzG4_bbE3KL9TOdqkPw&s" 
            alt="" 
            className='w-full object-contain cursor-pointer rounded-lg'
              />
          <section className='flex justify-between mx-4 my-2'>
            <h1 className='text-lg font-semibold'>Modern DownTown Apartment</h1>
            <h1 className='font-semibold text-gray-600'>₹18500/mo</h1>
          </section>
          <p className='text-gray-600 mx-4 my-2'>New Delhi</p>
          <section className='flex'>
            <p className='mx-4'>2 bed</p>
            <p>2 bath</p>
          </section>
        </div>
      </div>
      <p className='text-center mx-[40%] cursor-pointer px-4 py-2 rounded-xl bg-blue-800 text-white font-bold hover:bg-blue-700' onClick={() => navigate('/properties')}  >View All Properties →</p>
    </div>

    <Features/>
    <Testimonials/>
    
    </>
    
  )
}

export default Home