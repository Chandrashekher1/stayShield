import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'Blockchain-Based Agreements',
    description:
      'All rental agreements are stored on a secure blockchain to ensure transparency, immutability, and trust between tenants and landlords.',
    icon: '🔗',
  },
  {
    title: 'AI-Powered Property Verification',
    description:
      'Our AI scans and verifies property images to ensure conditions are fairly documented before and after rentals.',
    icon: '🤖',
  },
  {
    title: 'Smart Contract Automation',
    description:
      'Agreements execute automatically when conditions are met. No middlemen, no delays.',
    icon: '⚙️',
  },
  {
    title: 'Rental Score System',
    description:
      'Tenants build a trust score based on previous rentals, timely payments, and conduct, helping landlords make informed decisions.',
    icon: '📊',
  },
  {
    title: 'Secure Deposits',
    description:
      'Deposits are held in smart escrow until rental terms are completed and verified, then released accordingly.',
    icon: '💰',
  },
  {
    title: 'Verified Property Listings',
    description:
      'Only verified landlords and properties are listed, ensuring users only see legitimate and trusted listings.',
    icon: '🏠',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <div className='bg-white min-h-screen px-8 md:px-24 py-16'>
      <h1 className='text-4xl font-bold text-center text-blue-800 mb-4'>Our Services</h1>
      <p className='text-lg text-center text-gray-600 mb-12'>Powerful features designed to make renting easier, smarter, and more secure for everyone involved.</p>

      <motion.div
        className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className='border p-6 rounded-xl shadow-lg bg-blue-50 hover:bg-white hover:shadow-xl transition duration-300'
            variants={itemVariants}
          >
            <div className='text-5xl mb-4'>{service.icon}</div>
            <h2 className='text-2xl font-semibold text-blue-700'>{service.title}</h2>
            <p className='text-gray-600 mt-2'>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
