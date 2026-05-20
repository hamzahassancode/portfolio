import { useState } from 'react';
import { sendContact } from '../api/portfolioApi';
import type { ContactRequest } from '../types';

export default function Contact() {
  const [form, setForm] = useState<ContactRequest>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactRequest, string>>>({});

  const validate = (): boolean => {
    const e: Partial<Record<keyof ContactRequest, string>> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      await sendContact(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const field = (key: keyof ContactRequest) => ({
    value: form[key] ?? '',
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value })),
    className: `w-full bg-dark-700 border ${
      errors[key] ? 'border-red-500' : 'border-dark-600'
    } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors`,
  });

  return (
    <div className="pt-16 py-20 max-w-2xl mx-auto px-4">
      <h1 className="section-title text-center">Contact Me</h1>
      <p className="section-subtitle text-center">Got a question or want to work together?</p>

      {status === 'success' && (
        <div className="bg-green-900/40 border border-green-500 text-green-300 rounded-lg p-4 mb-6 text-center">
          ✅ Message sent! I'll get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-900/40 border border-red-500 text-red-300 rounded-lg p-4 mb-6 text-center">
          ❌ Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-5">
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Name *</label>
          <input type="text" placeholder="Hamza Hassan" {...field('name')} />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Email *</label>
          <input type="email" placeholder="you@example.com" {...field('email')} />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Subject</label>
          <input type="text" placeholder="What's it about?" {...field('subject')} />
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Message *</label>
          <textarea rows={6} placeholder="Your message..." {...field('message')} />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
        </div>
        <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
