import React from 'react'

const Features = () => {
  return (
    
    <div className='bg-gray-50 p-8'>
      <h1 className='text-center font-bold text-4xl my-4'>Platform Features</h1>
      <p className='text-center text-gray-500 text-xl my-4'>Explore the key features that make SmartRental the most secure and transparent rental platform available</p>

      <div className='flex  my-16 justify-around mx-32'>
        <div>
          <h1 className='font-semibold text-2xl'>AI-Powered Condition Verification</h1>
          <p className='text-gray-600 my-4 text-xl'>Our advanced AI technology compares property images before and after rental periods to fairly assess conditions and prevent disputes.</p>

          <ul>
            <div>
              <h1 className='font-bold text-xl'><span className=''>●</span>  Objective Assessment </h1>
              <p className='mx-4 text-gray-600 text-lg'>AI analyzes images pixel-by-pixel for fair comparisons</p>
            </div>
            <div>
              <h1 className='font-bold text-xl'><span>●</span>  Objective Assessment </h1>
              <p className='mx-4 text-gray-600 text-lg'>AI analyzes images pixel-by-pixel for fair comparisons</p>
            </div>
            <div>
              <h1 className='font-bold text-xl'><span>●</span>  Objective Assessment </h1>
              <p className='mx-4 text-gray-600 text-lg'>AI analyzes images pixel-by-pixel for fair comparisons</p>
            </div>

          </ul>
        </div>
        <div className='mx-16'>
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D"
           alt="" 
           className='w-[80%] h-[80%] rounded-xl'
           />
        </div>
      </div>
      <div className='mx-36'>
        <h1 className='font-bold text-xl'>Blockchain-Secured Deposits</h1>
        <p className='my-2 text-gray-700 text-lg'>Smart contracts secure rental deposits on the blockchain, ensuring fair and automatic release based on agreed conditions.</p>

        <div>
            <h1 className='font-semibold text-xl'><span>●</span> Transparent Terms</h1>
            <p className='mx-4 text-gray-600'>Clear contract conditions for deposit release that cannot be altered</p>
            <h1 className='font-semibold text-xl'><span>●</span> Automated Execution</h1>
            <p className='mx-4 text-gray-600'>Smart contracts automatically release funds based on pre-defined conditions</p>
            <h1 className='font-semibold text-xl'><span>●</span> Dispute Resolution</h1>
            <p className='mx-4 text-gray-600'>Fair arbitration process if AI assessment is contested</p>
        </div>
      </div>
    </div>
  )
}

export default Features