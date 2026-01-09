import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import ParticleBackground from "../Background/ParticleBackground";
import ContactModal from "./ContactModal";

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="relative min-h-screen flex items-center justify-center 
                   bg-gradient-to-br from-gray-950 via-black to-gray-950 
                   text-white px-6 overflow-hidden"
      >
        {/* Particle Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <ParticleBackground />
        </div>

        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row 
                        items-center justify-between 
                        w-full max-w-6xl gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start 
                       space-y-8 w-full lg:w-1/2"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl 
                           font-bold leading-tight 
                           text-center lg:text-left">
              LET&apos;S WORK <br /> TOGETHER
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">

              {/* OPEN MODAL */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="bg-white text-black 
                           font-semibold py-3 px-8 
                           rounded-full text-lg 
                           shadow-lg hover:shadow-xl 
                           transition-all duration-300"
              >
                CONTACT NOW
              </motion.button>

              {/* Call */}
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="tel:+917356206455"
                className="p-4 rounded-full 
                           bg-gray-800 hover:bg-indigo-600 
                           transition shadow-md"
              >
                <Phone size={24} />
              </motion.a>

              {/* Email */}
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="mailto:nishadsha888@gmail.com"
                className="p-4 rounded-full 
                           bg-gray-800 hover:bg-indigo-600 
                           transition shadow-md"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 
                              rounded-2xl 
                              border border-gray-700 
                              translate-x-4 translate-y-4"></div>

              <img
                src="/Contact.jpeg"
                alt="Mohammed Nishad"
                className="relative rounded-2xl 
                           max-w-sm lg:max-w-md 
                           object-cover shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {open && <ContactModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Contact;
