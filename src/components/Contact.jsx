import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="py-20 bg-primary text-secondary">
      <h2 className="text-3xl font-playfair font-bold text-center mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 bg-secondary text-primary rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 bg-secondary text-primary rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 bg-secondary text-primary rounded-lg"
          required
        ></textarea>
        <button type="submit" className="px-6 py-3 bg-accent text-secondary rounded-lg hover:bg-secondary hover:text-primary transition">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
