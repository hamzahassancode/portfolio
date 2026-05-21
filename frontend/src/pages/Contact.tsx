import { useEffect, useState } from 'react';
import { sendContact } from '../api/portfolioApi';
import { fetchProfile } from '../api/portfolioApi';
import type { ContactRequest, Profile } from '../types';

function InputWrapper({ label, required, error, children }: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-300 mb-1.5 block">
        {label}
        {required && <span className="text-primary-400 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        {error}
      </p>}
    </div>
  );
}

function ContactInfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/60 border border-dark-700/60 hover:border-primary-500/30 transition-all duration-200 group">
      <div className="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400 shrink-0 group-hover:bg-primary-500/20 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium mb-0.5">{label}</p>
        <p className="text-gray-200 text-sm font-medium">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer">{content}</a>
  ) : (
    <div>{content}</div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<ContactRequest>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactRequest, string>>>({});
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetchProfile().then(setProfile).catch(() => null);
  }, []);

  // Auto-dismiss success banner
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const validate = (): boolean => {
    const e: Partial<Record<keyof ContactRequest, string>> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
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
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  const fieldProps = (key: keyof ContactRequest) => ({
    value: form[key] ?? '',
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value })),
    className: `input-field ${errors[key] ? 'input-field-error' : ''}`,
  });

  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="section-title text-center">Get In Touch</h1>
      <p className="section-subtitle text-center">Have a question or want to work together?</p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: contact info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Let's connect</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {profile?.email && (
              <ContactInfoCard
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
            )}
            {profile?.location && (
              <ContactInfoCard
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                label="Location"
                value={profile.location}
              />
            )}
            {profile?.githubUrl && (
              <ContactInfoCard
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>}
                label="GitHub"
                value={profile.githubUrl.replace('https://', '')}
                href={profile.githubUrl}
              />
            )}
            {profile?.linkedinUrl && (
              <ContactInfoCard
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>}
                label="LinkedIn"
                value={profile.linkedinUrl.replace('https://www.', '').replace('https://', '')}
                href={profile.linkedinUrl}
              />
            )}
          </div>

          {/* Availability card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-primary-600/10 to-accent-600/10 border border-primary-500/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white">Available for work</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Currently open to full-time roles, freelance projects, and collaborations.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-3">
          {status === 'success' && (
            <div className="flex items-start gap-3 bg-green-900/30 border border-green-500/40 text-green-300 rounded-2xl p-4 mb-5 animate-fade-in">
              <svg className="w-5 h-5 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium">Message sent!</p>
                <p className="text-sm text-green-400/70 mt-0.5">I'll get back to you as soon as possible.</p>
              </div>
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-start gap-3 bg-red-900/30 border border-red-500/40 text-red-300 rounded-2xl p-4 mb-5 animate-fade-in">
              <svg className="w-5 h-5 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium">Something went wrong</p>
                <p className="text-sm text-red-400/70 mt-0.5">Please try again or reach out directly via email.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="card space-y-5 border-dark-700/60">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputWrapper label="Name" required error={errors.name}>
                <input type="text" placeholder="Hamza Hassan" {...fieldProps('name')} />
              </InputWrapper>
              <InputWrapper label="Email" required error={errors.email}>
                <input type="email" placeholder="you@example.com" {...fieldProps('email')} />
              </InputWrapper>
            </div>
            <InputWrapper label="Subject">
              <input type="text" placeholder="What's it about?" {...fieldProps('subject')} />
            </InputWrapper>
            <InputWrapper label="Message" required error={errors.message}>
              <textarea rows={6} placeholder="Your message…" {...fieldProps('message')} />
            </InputWrapper>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === 'sending' ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
