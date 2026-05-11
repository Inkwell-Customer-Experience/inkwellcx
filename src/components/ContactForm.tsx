'use client';

import { useState } from 'react';

const initialFormData = {
  name: '',
  email: '',
  businessName: '',
  website: '',
  projectType: '',
  message: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);

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
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message.');
      }

      setStatus('success');
      setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
      setFormData(initialFormData);
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 32 }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            className="form-input"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            spellCheck={false}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-business-name">Business Name (Optional)</label>
          <input
            id="contact-business-name"
            type="text"
            name="businessName"
            className="form-input"
            placeholder="Your business name"
            value={formData.businessName}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-website">Website (Optional)</label>
          <input
            id="contact-website"
            type="url"
            name="website"
            className="form-input"
            placeholder="https://your-website.com"
            value={formData.website}
            onChange={handleChange}
            autoComplete="url"
            spellCheck={false}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-project-type">Project Type</label>
          <select
            id="contact-project-type"
            name="projectType"
            className="form-input"
            style={{ appearance: 'none' }}
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select one...</option>
            <option>New Website</option>
            <option>Website Audit</option>
            <option>SEO Optimization</option>
            <option>Retainer/Management</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            className="form-input"
            placeholder="Tell us about your project…"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
            required
            rows={5}
          />
        </div>

        {status === 'success' && (
          <div role="status" aria-live="polite" style={{
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
          <div role="alert" style={{
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
          {isLoading ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
