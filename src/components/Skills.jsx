import {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

const iconMap = { Code2, Layout, Server, Database, BrainCircuit, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-12 md:py-20 px-5 sm:px-8 bg-ink-soft/30">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb ambient-orb-cyan" style={{ top: '20%', left: '5%' }} />
      </div>

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-accent mb-2">TECH STACK</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills &amp; Technologies
          </h2>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <Reveal key={cat.title} delay={i * 80}>
                <div className="surface-card h-full p-5 rounded-xl group transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex p-2 rounded-lg bg-accent-soft text-accent group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/5 hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
