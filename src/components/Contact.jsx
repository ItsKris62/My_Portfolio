import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify"; // For sanitizing user inputs
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "../utils/googleAnalytics";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(); // Reference to the form element
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false); // Loading state for the button
  const [showAnimation, setShowAnimation] = useState(false); // Letter animation state

  const sanitizeInput = (input) => DOMPurify.sanitize(input);

  const handleChange = (e) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setForm({ ...form, [e.target.name]: sanitizedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID
        formRef.current, // Form reference
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Public Key
      );

      // Track successful submission as an event
      trackEvent("Contact Form", "Submit", "Message Sent");

      setShowAnimation(true); // Trigger animation
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" }); // Reset form fields

      // Hide animation after 3 seconds
      setTimeout(() => setShowAnimation(false), 3000);
    } catch (error) {
      console.error("Error:", error); // Log error for debugging
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div id="contact" className="py-20 bg-primary text-secondary relative">
      <h2 className="text-3xl font-playfair font-bold text-center mb-8">
        Contact Me
      </h2>
      <form
        ref={formRef} // Attach the form reference
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          aria-label="Your Name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 bg-secondary text-primary rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          aria-label="Your Email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 bg-secondary text-primary rounded-lg"
          required
        />
        <textarea
          name="message"
          aria-label="Your Message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 bg-secondary text-primary rounded-lg"
          required
        ></textarea>
        <motion.button
          type="submit"
          aria-label="Send Message"
          className="px-6 py-3 bg-accent text-secondary rounded-lg hover:bg-secondary hover:text-primary transition flex items-center justify-center"
          whileHover={{ scale: 1.1 }} // Hover animation
          whileTap={{ scale: 0.9 }} // Tap animation
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full"></div>
          ) : (
            "Send"
          )}
        </motion.button>
      </form>
      {/* Letter Animation */}
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-16 h-12 bg-secondary rounded-t-sm relative"
              initial={{ y: 0 }}
              animate={{ y: -100 }}
              transition={{ duration: 2 }}
            >
              <div className="absolute inset-0 border-t-4 border-b-4 border-accent rounded-t-md"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer /> {/* Toast notifications */}
    </div>
  );
};

export default Contact;
