import { Briefcase, MapPin } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-6 sm:py-8 px-5 sm:px-8 bg-ink-soft/30">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb ambient-orb-violet" style={{ top: '10%', left: '0%' }} />
      </div>

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-accent mb-2">EXPERIENCE</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Experience</h2>
        </Reveal>

        <div className="mt-10 relative">
          <div
            aria-hidden
            className="absolute left-4 sm:left-5 top-2 bottom-2 w-px timeline-line"
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="relative pl-12 sm:pl-16">
                  <div
                    className={`absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                      exp.current
                        ? 'border-accent bg-accent-soft shadow-[0_0_18px_rgba(85,214,255,0.35)]'
                        : 'border-white/15 bg-surface'
                    }`}
                  >
                    <Briefcase
                      size={14}
                      className={exp.current ? 'text-accent' : 'text-muted'}
                    />
                  </div>

                  <div className="surface-card p-5 sm:p-6 rounded-xl transition-colors">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </span>
                          Currently Working
                        </span>
                      )}
                      {!exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-muted border border-white/8">
                          {exp.status}
                        </span>
                      )}
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-accent font-medium">
                        <MapPin size={14} />
                        {exp.company}
                      </span>
                      <span className="text-muted text-xs font-mono">{exp.period}</span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 flex-shrink-0 h-1 w-1 rounded-full bg-accent" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
