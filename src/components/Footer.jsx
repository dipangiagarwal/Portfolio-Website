import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { socials, profile } from '@/data/portfolio';

const isPlaceholder = (url) => !url || url.startsWith('[ADD');

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/5 px-5 sm:px-8 py-10">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted text-center sm:text-left">
          © 2026 {profile.name}. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={isPlaceholder(socials.github) ? undefined : socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`p-2 rounded-md transition-colors ${
              isPlaceholder(socials.github)
                ? 'text-slate-600 cursor-not-allowed pointer-events-none'
                : 'text-muted hover:text-accent hover:bg-white/5'
            }`}
          >
            <Github size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md text-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="p-2 rounded-md text-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-md text-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
