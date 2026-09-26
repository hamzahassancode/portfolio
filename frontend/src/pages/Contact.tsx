import { useState } from 'react';
import { profile } from '../data/portfolio';
import { GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from '../components/Icons';
import type { ContactRequest } from '../types';

type Errors = Partial<Record<keyof ContactRequest, string>>;

const EMPTY_FORM: ContactRequest = { name: '', email: '', subject: '', message: '' };

function InputWrapper({ id, label, required, error, children }: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-cocoa-900 mb-1.5 block">
        {label}
        {required && <span className="text-caramel-600 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-700 text-xs mt-1.5">{error}</p>}
    </div>
  );
}

function ContactInfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-cream-50 border border-cream-300 hover:border-caramel-300 transition-colors duration-200">
      <div className="w-10 h-10 bg-caramel-100 rounded-full flex items-center justify-center text-caramel-700 shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-cocoa-500 font-medium mb-0.5">{label}</p>
        <p className="text-cocoa-900 text-sm font-semibold truncate">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href} target="_blank" rel="noreferrer">{content}</a> : content;
}

function validate(form: ContactRequest): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Invalid email address';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

function ContactForm({ to }: { to: string }) {
  const [form, setForm] = useState<ContactRequest>(EMPTY_FORM);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    const subject = form.subject.trim() || `Portfolio message from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const fieldProps = (key: keyof ContactRequest) => ({
    id: `contact-${key}`,
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value })),
    className: `input-field ${errors[key] ? 'input-field-error' : ''}`,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-5 hover:shadow-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputWrapper id="contact-name" label="Name" required error={errors.name}>
          <input type="text" placeholder="Your name" autoComplete="name" {...fieldProps('name')} />
        </InputWrapper>
        <InputWrapper id="contact-email" label="Email" required error={errors.email}>
          <input type="email" placeholder="you@example.com" autoComplete="email" {...fieldProps('email')} />
        </InputWrapper>
      </div>
      <InputWrapper id="contact-subject" label="Subject">
        <input type="text" placeholder="What's it about?" {...fieldProps('subject')} />
      </InputWrapper>
      <InputWrapper id="contact-message" label="Message" required error={errors.message}>
        <textarea rows={6} placeholder="Your message…" {...fieldProps('message')} />
      </InputWrapper>
      <button type="submit" className="btn-primary w-full justify-center">
        <MailIcon className="w-4 h-4" />
        Send message
      </button>
      <p className="text-xs text-cocoa-400 text-center">Opens your email app with the message ready to send.</p>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="eyebrow text-center mb-3">Contact</p>
      <h1 className="section-title text-center">Get In Touch</h1>
      <p className="section-subtitle text-center">Have a question or want to work together?</p>

      <div className={`grid grid-cols-1 gap-8 ${profile.email ? 'lg:grid-cols-5' : 'max-w-xl mx-auto'}`}>
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div>
            <h2 className="font-serif text-xl font-semibold mb-2">Let's connect</h2>
            <p className="text-cocoa-500 text-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {profile.email && (
              <ContactInfoCard icon={<MailIcon />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            )}
            {profile.linkedinUrl && (
              <ContactInfoCard
                icon={<LinkedInIcon className="w-5 h-5" />}
                label="LinkedIn"
                value={profile.linkedinUrl.replace(/^https:\/\/(www\.)?/, '')}
                href={profile.linkedinUrl}
              />
            )}
            {profile.githubUrl && (
              <ContactInfoCard
                icon={<GitHubIcon className="w-5 h-5" />}
                label="GitHub"
                value={profile.githubUrl.replace('https://', '')}
                href={profile.githubUrl}
              />
            )}
            {profile.location && (
              <ContactInfoCard icon={<PinIcon className="w-5 h-5" />} label="Location" value={profile.location} />
            )}
          </div>

          <div className="p-5 rounded-2xl bg-sage-100 border border-sage-500/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-sage-500 rounded-full" />
              <span className="text-sm font-semibold text-sage-700">Available for work</span>
            </div>
            <p className="text-cocoa-700 text-xs leading-relaxed">
              Currently open to full-time roles, freelance projects, and collaborations.
            </p>
          </div>
        </div>

        {profile.email && (
          <div className="lg:col-span-3">
            <ContactForm to={profile.email} />
          </div>
        )}
      </div>
    </div>
  );
}
