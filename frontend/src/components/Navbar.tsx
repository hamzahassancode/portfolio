import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-dark-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-primary-500/40 transition-shadow">
              H
            </div>
            <span className="text-lg font-bold gradient-text">Hamza Hassan</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === to
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
                }`}
              >
                {label}
                {pathname === to && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-400 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 btn-primary py-2 px-5 text-sm"
            >
              Let's Talk
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-dark-700/50 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-dark-900/95 border border-dark-700/50 rounded-2xl mb-4 p-2 flex flex-col gap-1 animate-slide-down">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                  pathname === to
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center mt-1 py-3 text-sm"
            >
              Let's Talk
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
