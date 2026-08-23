import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb ambient-orb-violet" style={{ top: '15%', right: '5%' }} />
      </div>

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-accent mb-2">EDUCATION</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
        </Reveal>

        <div className="mt-8">
          {education.map((edu, i) => (
            <Reveal key={i} delay={80}>
              <div className="surface-card p-5 sm:p-6 rounded-xl transition-colors flex items-start gap-4">
                <span className="inline-flex p-2.5 rounded-lg bg-accent-soft text-accent flex-shrink-0">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-muted">
                      <MapPin size={14} className="text-accent" />
                      {edu.institution}
                    </span>
                    <span className="text-muted text-xs font-mono">{edu.period}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
