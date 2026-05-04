'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { config } from '@/config/constants';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Select one...',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      // Initialize EmailJS
      emailjs.init(config.emailjs.publicKey);

      const templateParams = {
        to_email: config.contact.email,
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.message,
      };

      const response = await emailjs.send(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        templateParams
      );

      if (response.status === 200) {
        setStatus('success');
        setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', projectType: 'Select one...', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 32 }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Project Type</label>
          <select
            name="projectType"
            className="form-input"
            style={{ appearance: 'none' }}
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option>Select one...</option>
            <option>New Website</option>
            <option>Website Audit</option>
            <option>SEO Optimization</option>
            <option>Retainer/Management</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-input"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </div>

        {status === 'success' && (
          <div style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius)',
            backgroundColor: 'rgba(63, 185, 80, 0.1)',
            border: '1px solid var(--green)',
            color: 'var(--green)',
            fontSize: '14px',
          }}>
            ✓ {statusMessage}
          </div>
        )}

        {status === 'error' && (
          <div style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius)',
            backgroundColor: 'rgba(248, 81, 73, 0.1)',
            border: '1px solid #f85149',
            color: '#f85149',
            fontSize: '14px',
          }}>
            ✕ {statusMessage}
          </div>
        )}

        <button
          type="submit"
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
