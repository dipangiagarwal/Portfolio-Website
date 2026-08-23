import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun, Github, Linkedin } from 'lucide-react';
import { navLinks, profile, socials } from '@/data/portfolio';
import useTheme from '@/hooks/useTheme';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-soft/85 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-mono text-sm font-semibold tracking-tight text-slate-100 hover:text-accent transition-colors"
        >
          <span className="text-accent">{'<'}</span>
          {profile.name.split(' ')[0]}
          <span className="text-accent">{' />'}</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `nav-link px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'nav-link-active text-accent'
                      : 'text-muted hover:text-slate-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {profile.available && (
            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-muted mr-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available
            </span>
          )}

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden sm:inline-flex p-2 rounded-md text-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden sm:inline-flex p-2 rounded-md text-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            <Linkedin size={18} />
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-slate-200 hover:bg-white/5 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-ink-soft/95 backdrop-blur-md border-b border-white/5`}
      >
        <ul className="px-5 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `w-full block text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-accent bg-accent-soft'
                      : 'text-slate-300 hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
