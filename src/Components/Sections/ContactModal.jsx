import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactModal = ({ onClose }) => {

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);
const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_a65f48j",    
      "template_5shwki3",   
      e.target,
      "fa1W9a4aZlB2widcA"   
    )
    .then(() => {
      alert("Message sent successfully!");
      onClose();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    });
};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-black/80 backdrop-blur-lg px-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl 
                   bg-gradient-to-br from-black/90 to-gray-900/80
                   border border-white/10 shadow-2xl p-10"
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute top-5 right-5 w-9 h-9 
                     flex items-center justify-center
                     rounded-full border border-white/20 
                     text-white hover:bg-white/10"
        >
          <X size={18} />
        </button>

        <h2 className="text-3xl font-semibold text-center mb-10">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Name" name="name" required />
            <Input label="Email" name="email" type="email" required />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Phone" name="phone" />
            <Input label="Subject" name="subject" />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full rounded-xl px-4 py-3
                         bg-black/40 border border-gray-500/30
                         focus:border-red-500 focus:outline-none
                         text-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-4 rounded-xl
                       bg-white text-black font-semibold
                       flex items-center justify-center gap-2
                       hover:bg-gray-200 transition"
          >
            Send Message <Send size={18} />
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;

/* Input Component */
const Input = ({ label, name, type = "text", required = false }) => (
  <div>
    <label className="block mb-2 text-sm text-gray-300">{label}</label>
    <input
      name={name}
      type={type}
      required={required}
      className="w-full rounded-xl px-4 py-3
                 bg-black/40 border border-gray-500/30
                 focus:border-red-500 focus:outline-none
                 text-white"
    />
  </div>
);
