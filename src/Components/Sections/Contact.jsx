import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import ParticleBackground from "../Background/ParticleBackground";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white px-6 relative overflow-hidden">
      <ParticleBackground/>
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start space-y-8 w-full lg:w-1/2"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            LET'S <br /> WORK TOGETHER
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6">
            {/* Contact Now */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-white text-black font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
            >
              CONTACT NOW
            </motion.a>
 
            {/* Call Button */}
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="tel:+910000000000"
              className="p-4 rounded-full bg-gray-800 hover:bg-indigo-600 transition shadow-md"
            >
              <Phone size={24} />
            </motion.a>

            {/* Gmail Button */}
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="mailto:youremail@example.com"
              className="p-4 rounded-full bg-gray-800 hover:bg-indigo-600 transition shadow-md"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="/mypic.jpg" // replace with your image path
            alt="Your Photo"
            className="rounded-2xl shadow-lg max-w-sm lg:max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
