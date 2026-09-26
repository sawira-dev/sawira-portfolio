import React, { useState } from "react";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

const CONTACT_INFO = [
  {
    icon: FiMail,
    label: "Email",
    value: "sawkhan842@gmail.com",
    href: "mailto:sawkhan842@gmail.com",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "@sawira-manzoor",
    href: "https://www.linkedin.com/in/sawira-manzoor-300557327",
    external: true,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "@sawira-dev",
    href: "https://github.com/sawira-dev",
    external: true,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+92 3087161190",
    href: "tel:+923087161190",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Pakistan",
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Replace this block with Formspree, EmailJS, or your backend call
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log(formData);
    setSending(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="cnt-section">
      <div className="cnt-glow-a" aria-hidden="true" />
      <div className="cnt-glow-b" aria-hidden="true" />

      <div className="cnt-container">
        <div className="cnt-header">
          <p className="cnt-eyebrow">
            <FiSend size={13} /> 08 · Contact
          </p>
          <h2 className="cnt-heading">
            Let's Work <em className="cnt-heading-accent">Together</em>
          </h2>
          <p className="cnt-intro">
            Have a project in mind? I'd love to hear about it. Send me a
            message and I'll get back to you as soon as I can.
          </p>
        </div>

        <div className="cnt-grid">
          {/* ── LEFT — Info cards ─────────────── */}
          <div className="cnt-info">
            <h3 className="cnt-info-title">Get in Touch</h3>

            <ul className="cnt-info-list">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? {
                      href: item.href,
                      target: item.external ? "_blank" : undefined,
                      rel: item.external ? "noreferrer" : undefined,
                    }
                  : {};

                return (
                  <li key={item.label}>
                    <Wrapper className="cnt-info-item" {...wrapperProps}>
                      <span className="cnt-info-icon">
                        <Icon size={16} />
                      </span>
                      <span className="cnt-info-body">
                        <small className="cnt-info-label">{item.label}</small>
                        <span className="cnt-info-value">{item.value}</span>
                      </span>
                    </Wrapper>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── RIGHT — Form ──────────────────── */}
          <form className="cnt-form" onSubmit={handleSubmit} noValidate>
            <div className="cnt-field">
              <label htmlFor="cnt-name" className="cnt-field-label">
                <FiUser size={12} /> Name
              </label>
              <input
                id="cnt-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                disabled={sending}
              />
            </div>

            <div className="cnt-field">
              <label htmlFor="cnt-email" className="cnt-field-label">
                <FiMail size={12} /> Email
              </label>
              <input
                id="cnt-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                disabled={sending}
              />
            </div>

            <div className="cnt-field">
              <label htmlFor="cnt-message" className="cnt-field-label">
                <FiMessageSquare size={12} /> Message
              </label>
              <textarea
                id="cnt-message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={sending}
              />
            </div>

            <button
              type="submit"
              className="cnt-submit"
              disabled={sending || submitted}
            >
              {submitted ? (
                <>
                  <FiCheck size={16} /> Sent successfully
                </>
              ) : sending ? (
                <>
                  <span className="cnt-spinner" /> Sending...
                </>
              ) : (
                <>
                  <FiSend size={15} /> Send Message
                </>
              )}
            </button>

            {submitted && (
              <p className="cnt-success">
                <FiCheck size={13} /> Thank you! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}