import { useEffect, useRef, useState } from 'react';
import type { Profile } from '../types';
import { DownloadIcon, GitHubIcon, LinkedInIcon, PinIcon } from './Icons';
import ProfileCodeCard from './ProfileCodeCard';

interface Stat {
  value: string;
  label: string;
}

interface Props {
  profile: Profile;
  stats: Stat[];
  card: React.ComponentProps<typeof ProfileCodeCard>;
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

export default function Hero({ profile, stats, card }: Props) {
  const typeText = useTypewriter([profile.title, 'Full-Stack Developer', 'Messaging & Automation']);
  const [firstName, ...rest] = profile.fullName.split(' ');

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(221,170,120,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(111,128,96,0.12),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 bg-sage-500 rounded-full" />
            Available for new opportunities
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-5">
            Hi, I'm {firstName}
            {rest.length > 0 && <> <span className="accent-text">{rest.join(' ')}</span></>}
          </h1>

          <p className="text-xl md:text-2xl text-cocoa-500 font-medium h-9 mb-6" aria-label={profile.title}>
            <span aria-hidden="true">
              {typeText}
              <span className="inline-block w-[2px] h-6 bg-caramel-500 ml-1 align-middle animate-pulse" />
            </span>
          </p>

          <p className="text-cocoa-700 text-lg max-w-xl mb-9 leading-relaxed">{profile.bio}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} download className="btn-primary">
                <DownloadIcon />
                Download CV
              </a>
            )}
            {profile.linkedinUrl && (
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="btn-outline">
                <LinkedInIcon />
                LinkedIn
              </a>
            )}
            {profile.githubUrl && (
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="btn-outline">
                <GitHubIcon />
                GitHub
              </a>
            )}
          </div>

          {profile.location && (
            <p className="text-cocoa-500 text-sm flex items-center gap-1.5">
              <PinIcon />
              {profile.location}
            </p>
          )}
        </div>

        <div className="relative flex justify-center md:justify-end opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-6 rounded-[2rem] bg-caramel-200/40 blur-2xl" aria-hidden="true" />
          <div className="relative w-full flex justify-center md:justify-end">
            <ProfileCodeCard {...card} />
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <dl className="grid grid-cols-3 rounded-2xl border border-cream-300 bg-cream-50/70 divide-x divide-cream-300">
          {stats.map(stat => (
            <div key={stat.label} className="flex flex-col items-center py-5 px-2 text-center">
              <dt className="order-2 text-xs sm:text-sm text-cocoa-500 mt-1">{stat.label}</dt>
              <dd className="order-1 font-serif text-2xl sm:text-3xl font-semibold text-caramel-600">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
