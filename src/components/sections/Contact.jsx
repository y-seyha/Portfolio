import React, { useState } from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-4 lg:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Get in Touch
            </h2>
            <h3 className="text-2xl lg:text-3xl font-medium mb-4">
              Let’s build something amazing together
            </h3>
            <h4 className="text-lg lg:text-xl text-white/60 mb-6">
              I am always excited to collaborate on projects or discuss new
              ideas. Drop a message and I’ll get back to you as soon as
              possible.
            </h4>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-10 text-white text-3xl lg:text-4xl">
            <a
              href="mailto:yoeunseyha11@gmail.com"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              <FiMail />
            </a>
            <a
              href="https://t.me/yoeun_seyha"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.linkedin.com/in/yoeun-seyha-742a712ba"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/y-seyha"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              <FiGithub />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div>
          <form
            className="bg-white/5 p-12 lg:p-16 rounded-2xl border border-white/10 flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-5 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-5 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="p-5 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-medium rounded-full hover:bg-white/10 transition-all text-lg"
            >
              Send Message
              <FaTelegramPlane className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
