import React, { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate formspree, emailjs, etc.
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-heading">Contact Me</h2>
      <div className="contact-container">
        {/* Info */}
        <div className="contact-info">
          <div className="info-item">
            <FiMail />
            <span>sawira.manzoor@example.com</span>
          </div>
          <div className="info-item">
            <FiLinkedin />
            <span>linkedin.com/in/sawiramanzoor</span>
          </div>
          <div className="info-item">
            <FiGithub />
            <span>github.com/sawiramanzoor</span>
          </div>
          <div className="info-item">
            <FiPhone />
            <span>+92 300 1234567</span>
          </div>
          <div className="info-item">
            <FiMapPin />
            <span>Pakistan</span>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn-primary btn">
            {submitted ? 'Sent!' : 'Send Message'}
          </button>
          {submitted && <p className="success-msg">Thank you! I'll get back to you soon.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;