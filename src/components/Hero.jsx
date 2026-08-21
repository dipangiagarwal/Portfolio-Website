import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile, socials } from '@/data/portfolio';

const isPlaceholder = (url) => !url || url.startsWith('[ADD');

const techChips = [
  { label: 'React', glyph: '⚛', color: '#61dafb' },
  { label: 'JavaScript', glyph: 'JS', color: '#f7df1e' },
  { label: 'Node.js', glyph: '⬢', color: '#8cc84b' },
  { label: 'Python', glyph: '🐍', color: '#4584b6' },
  { label: 'Database', glyph: '🗄', color: '#55d6ff' },
  { label: 'Git', glyph: '⎇', color: '#f1502f' },
];

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-6 px-5 sm:px-8 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hero-grid opacity-[0.12]" />
        <div className="ambient-orb ambient-orb-cyan" style={{ top: '8%', right: '-6%' }} />
        <div className="ambient-orb ambient-orb-violet" style={{ bottom: '4%', left: '-8%' }} />
      </div>

      <div className="mx-auto w-full max-w-6xl grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div className="text-center lg:text-left">
          {profile.available && (
            <div className="animate-fade-down inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-muted">Available for Opportunities</span>
            </div>
          )}

          <p className="animate-fade-up text-base sm:text-lg text-muted mb-3">
            Hi, I&apos;m {profile.name}
          </p>

          <h1
            className="animate-fade-up text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
            style={{ animationDelay: '80ms' }}
          >
            {profile.role}
          </h1>

          <p
            className="animate-fade-up mx-auto lg:mx-0 mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted"
            style={{ animationDelay: '160ms' }}
          >
            {profile.tagline}
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3"
            style={{ animationDelay: '240ms' }}
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-accent text-ink font-semibold text-sm hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg border border-white/15 text-slate-200 font-medium text-sm hover:border-accent/50 hover:text-accent transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </div>

          <div
            className="animate-fade-up mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-5"
            style={{ animationDelay: '320ms' }}
          >
            <a
              href={profile.resumeUrl}
              download="DIPANGI_AGARWAL_Resume_webdev.pdf"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
            >
              <Download size={15} />
              Download Resume
            </a>
            <span className="h-4 w-px bg-white/15" />
            <div className="flex items-center gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`transition-colors ${
                  isPlaceholder(socials.github)
                    ? 'text-slate-600 cursor-not-allowed pointer-events-none'
                    : 'text-muted hover:text-accent'
                }`}
              >
                <Github size={18} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="animate-fade-in hidden lg:block" style={{ animationDelay: '200ms' }}>
          <div className="code-panel rounded-2xl p-6 float-slow">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-xs font-mono text-muted">developer.js</span>
            </div>
            <pre className="font-mono text-[13px] leading-relaxed text-slate-300">
              <code>
                <span className="text-accent2">const</span> <span className="text-accent">dev</span> <span className="text-slate-500">=</span> {'{'}{'\n'}
                {'  '}name<span className="text-slate-500">:</span> <span className="text-emerald-300">'Dipangi'</span>,{'\n'}
                {'  '}role<span className="text-slate-500">:</span> <span className="text-emerald-300">'Full Stack'</span>,{'\n'}
                {'  '}stack<span className="text-slate-500">:</span> [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Node'</span>,{'\n'}
                {'             '}<span className="text-emerald-300">'Python'</span>, <span className="text-emerald-300">'Postgres'</span>],{'\n'}
                {'  '}focus<span className="text-slate-500">:</span> <span className="text-emerald-300">'AI/ML'</span>,{'\n'}
                {'  '}build()<span className="text-slate-500">:</span> <span className="text-accent2">{'{ '}</span>
                <span className="text-slate-500">return</span> <span className="text-emerald-300">'shipped'</span>
                <span className="text-accent2">{' }'}</span>{'\n'}
                {'}'};
              </code>
            </pre>

            <div className="mt-6 pt-5 border-t border-white/8">
              <div className="grid grid-cols-3 gap-2.5">
                {techChips.map((chip) => (
                  <div
                    key={chip.label}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-white/[0.03] border border-white/5"
                  >
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold flex-shrink-0"
                      style={{ color: chip.color, background: `${chip.color}14` }}
                    >
                      {chip.glyph}
                    </span>
                    <span className="text-xs font-medium text-slate-300 truncate">{chip.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
