import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiCheck } from 'react-icons/fi';

const EMAIL = 'thapaprasan058@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section container contact">
      <span className="section-label mono">Contact</span>
      <h2 className="section-title">Have something worth building?</h2>
      <p>Open to internships and anything AI/ML-adjacent.</p>
      <div className="contact-links">
        <a href="#" onClick={handleCopyEmail} className="copy-email-link">
          {copied ? <FiCheck /> : <FiMail />}
          {copied ? 'Copied!' : 'Email'}
        </a>
        <a href="https://github.com/prasan369" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
        <a href="https://www.linkedin.com/in/prasan-thapa-6b5b35302/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
      </div>
    </section>
  );
}