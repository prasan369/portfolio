import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiCheck } from 'react-icons/fi';

const EMAIL = 'thapaprasan058@gmail.com';

export default function Contact() {
  const ACCESS_KEY = "7c0d8ec7-26c2-4865-89e4-123420a9e87a";
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio contact from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section container contact">
      <span className="section-label mono">Contact</span>
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="section-title">Have something worth building?</h2>
          <p className="contact-desc">Open to internships and anything AI/ML-adjacent.</p>
          <div className="contact-links">
            <a href="#" onClick={handleCopyEmail} className="copy-email-link">
              {copied ? <FiCheck /> : <FiMail />}
              {copied ? 'Copied!' : 'Email'}
            </a>
            <a href="https://github.com/prasan369" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/prasan-thapa-6b5b35302/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label mono">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label mono">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label mono">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          <button type="submit" className="form-submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send message →"}
          </button>

          {status === "error" && (
            <p className="form-error">Something went wrong — email me directly instead.</p>
          )}
        </form>
      </div>
    </section>
  );
}