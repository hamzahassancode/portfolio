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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-cream-100/90 backdrop-blur-md border-b border-cream-300'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
            <span className="w-9 h-9 bg-caramel-600 rounded-full flex items-center justify-center text-cream-50 font-serif font-semibold">
              H
            </span>
            <span className="font-serif text-lg font-semibold text-cocoa-900">Hamza Hassan</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                aria-current={pathname === to ? 'page' : undefined}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  pathname === to
                    ? 'text-caramel-700 bg-caramel-100'
                    : 'text-cocoa-700 hover:text-cocoa-900 hover:bg-cream-200'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" className="ml-3 btn-primary py-2 px-5 text-sm">
              Let's Talk
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-cocoa-700 hover:bg-cream-200 rounded-full transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
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
          <div className="md:hidden pb-4 flex flex-col gap-1 animate-slide-down">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  pathname === to
                    ? 'text-caramel-700 bg-caramel-100'
                    : 'text-cocoa-700 hover:bg-cream-200'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
