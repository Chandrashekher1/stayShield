import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is StayShield and how does it work?",
    answer: "StayShield is a platform that combines AI and blockchain to ensure transparent, secure, and efficient property renting for both landlords and tenants. It uses smart contracts, AI verification, and secure documentation stored on the blockchain."
  },
  {
    question: "How are smart contracts used in rentals?",
    answer: "Smart contracts automate the rental agreement process. They hold terms like deposit, rent, and duration, and automatically enforce them, reducing the chance of disputes or fraud."
  },
  {
    question: "How does the AI property verification work?",
    answer: "Our AI compares images and documents before and after a rental period to assess the property's condition and decide on security deposit returns fairly and automatically."
  },
  {
    question: "What is a Rental Score?",
    answer: "Rental Score is a trust metric generated using tenant history, verified behavior, and past rental patterns. It helps landlords assess tenant reliability and promotes responsible renting."
  },
  {
    question: "Are my documents and transactions secure?",
    answer: "Yes. All critical data and documents are stored using blockchain, ensuring immutability and transparency. Smart contracts handle transactions without needing third-party oversight."
  },
  {
    question: "Is this service available across India?",
    answer: "We are currently launching in major metropolitan cities and expanding to other regions. You can check availability in your area on our Properties page."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-12">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-800 mb-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.p
        className="text-center text-gray-600 mb-12 text-lg"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Learn more about how StayShield helps secure your rental journey.
      </motion.p>

      <div className="max-w-4xl mx-auto space-y-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border border-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
