import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: '1. Property Documentation',
    description:
      'Landlords upload detailed images and property information. These are stored securely on the blockchain as a verifiable record of condition.',
  },
  {
    title: '2. Smart Contract Agreement',
    description:
      'Rental agreements are created as smart contracts on the blockchain, including deposit terms and conditions that execute automatically.',
  },
  {
    title: '3. AI Condition Verification',
    description:
      'Upon move-out, our AI compares before and after images to fairly assess property condition and determine appropriate deposit returns.',
  },
  {
    title: '4. Verified Tenant Scoring',
    description:
      'Tenants receive a Rental Score based on previous history, payment consistency, and reviews — all transparently stored.',
  },
  {
    title: '5. Dispute Resolution Protocol',
    description:
      'Disputes are resolved using our blockchain audit trail and AI-based inspection verification to ensure fairness.',
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <motion.div
      className="bg-white min-h-screen py-16 px-8 md:px-24"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-4"
        variants={itemVariant}
      >
        How StayShield Works
      </motion.h1>
      <motion.p
        className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12"
        variants={itemVariant}
      >
        StayShield uses AI and blockchain to protect tenants and landlords at every step of the rental process.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-xl p-8 bg-blue-50 shadow-md hover:shadow-xl transition duration-300"
            variants={itemVariant}
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">{step.title}</h2>
            <p className="text-gray-700 text-lg">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
