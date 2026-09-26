import { Link } from 'react-router-dom';
import { profile } from '../data/portfolio';
import { GitHubIcon, LinkedInIcon } from './Icons';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream-300 bg-cream-200/60 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-serif text-lg font-semibold text-cocoa-900 mb-2">{profile.fullName}</p>
            <p className="text-sm text-cocoa-500 leading-relaxed max-w-xs">
              Building clean, scalable software with a passion for great developer experience.
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(({ label, to }) => (
                <Link key={to} to={to} className="text-sm text-cocoa-700 hover:text-caramel-600 transition-colors w-fit">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-cocoa-700 hover:text-caramel-600 transition-colors w-fit"
                >
                  <GitHubIcon />
                  GitHub
                </a>
              )}
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-cocoa-700 hover:text-caramel-600 transition-colors w-fit"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-cream-300 pt-6">
          <p className="text-sm text-cocoa-500">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
