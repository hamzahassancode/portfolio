import { useEffect, useRef, useState } from 'react';
import type { Profile } from '../types';

interface Props {
  profile: Profile;
}

function useTypewriter(initialWords: string[], typingSpeed = 80, deletingSpeed = 45, pause = 2200) {
  const wordsRef = useRef(initialWords);
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const words = wordsRef.current;
    if (words.length === 0) return;
    const currentWord = words[wordIndex % words.length];

    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pause);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, display.length + 1);
        setDisplay(next);
        if (next === currentWord) setIsPaused(true);
      } else {
        const next = display.slice(0, -1);
        setDisplay(next);
        if (next === '') {
          setIsDeleting(false);
          setWordIndex(i => i + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [display, isDeleting, isPaused, wordIndex, pause, deletingSpeed, typingSpeed]);

  return display;
}

export default function Hero({ profile }: Props) {
  const roles = [profile.title, 'Problem Solver', 'Open Source Enthusiast'].filter(Boolean) as string[];
  const typeText = useTypewriter(roles);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Availability badge */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Available for new opportunities
          </span>
        </div>

        {/* Avatar */}
        <div className="relative inline-block mb-8 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-lg opacity-40 scale-110 animate-glow" />
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt={profile.fullName}
              className="relative w-32 h-32 rounded-full object-cover border-2 border-primary-500/40"
            />
          ) : (
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-4xl font-bold text-white border-2 border-primary-500/40">
              {profile.fullName.charAt(0)}
            </div>
          )}
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          Hi, I'm{' '}
          <span className="gradient-text">{profile.fullName}</span>
        </h1>

        {/* Typewriter role */}
        <div
          className="h-10 mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
        >
          <p className="text-xl md:text-2xl text-primary-400 font-medium">
            {typeText}
            <span className="animate-pulse ml-0.5">|</span>
          </p>
        </div>

        {/* Bio */}
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          {profile.bio}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
        >
          {profile.githubUrl && (
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="btn-outline">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {profile.linkedinUrl && (
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          )}
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          )}
        </div>

        {/* Location */}
        {profile.location && (
          <p
            className="text-gray-500 text-sm flex items-center justify-center gap-1.5 opacity-0 animate-fade-in mb-14"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {profile.location}
          </p>
        )}

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-px mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.85s', animationFillMode: 'forwards' }}
        >
          {[
            { value: '5+', label: 'Years Coding' },
            { value: '20+', label: 'Projects Built' },
            { value: '100%', label: 'Passion' },
          ].map((stat, i) => (
            <div key={i} className={`flex flex-col items-center px-8 py-3 ${i > 0 ? 'border-l border-dark-700' : ''}`}>
              <span className="text-2xl font-bold gradient-text">{stat.value}</span>
              <span className="text-xs text-gray-500 mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex justify-center animate-float" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-dark-600 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-primary-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
