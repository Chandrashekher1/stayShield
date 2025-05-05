import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Testimonials = () => {
  return (
    <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        What Our Users Say
      </h1>
      <p className="text-lg text-center text-gray-600 my-4">
        Join thousands of satisfied landlords and tenants who trust SmartRental
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <motion.div
          className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-xl transition duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          custom={0}
        >
          <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
          <p className="text-gray-700 italic mb-4">
            "As a landlord, I've had my share of deposit disputes. SmartRental has eliminated these completely. The AI verification is impartial and the smart contracts ensure everyone plays fair."
          </p>
          <div>
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-sm text-gray-500">Landlord, 3 properties</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-xl transition duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          custom={1}
        >
          <div className="text-yellow-400 text-xl mb-2">★★★★☆</div>
          <p className="text-gray-700 italic mb-4">
            "SmartRental made my move-in and move-out process seamless. No arguments, no delays—just clarity and trust."
          </p>
          <div>
            <p className="font-semibold text-gray-800">Jane Smith</p>
            <p className="text-sm text-gray-500">Tenant, Mumbai</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-xl transition duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          custom={2}
        >
          <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
          <p className="text-gray-700 italic mb-4">
            "Managing multiple tenants used to be stressful. SmartRental’s digital agreement and escrow system have been a game-changer for me!"
          </p>
          <div>
            <p className="font-semibold text-gray-800">Raj Verma</p>
            <p className="text-sm text-gray-500">Property Manager</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
