import { Layers, Server, Database, BrainCircuit } from 'lucide-react';
import { about } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

const iconMap = { Layers, Server, Database, BrainCircuit };

export default function About() {
  return (
    <section id="about" className="section-shell py-6 sm:py-8 px-5 sm:px-8">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb ambient-orb-cyan" style={{ top: '20%', right: '2%' }} />
      </div>

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-accent mb-2">WHO AM I</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">About Me</h2>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Reveal delay={80}>
            <div className="photo-frame relative rounded-3xl overflow-hidden">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-surface-raised/60">
                <img
                  src="/profile.jpg"
                  alt="Portrait of Dipangi Agarwal"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div
                  style={{ display: 'none' }}
                  className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted"
                >
                  <div className="w-20 h-20 rounded-full bg-accent-soft flex items-center justify-center">
                    <Database size={28} className="text-accent" />
                  </div>
                  <p className="text-sm font-medium text-slate-300">Add /profile.jpg</p>
                  <p className="text-xs text-muted">Replace the file in /public</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-base leading-relaxed text-muted">{about.intro}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{about.detail}</p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {about.highlights.map((h) => {
                const Icon = iconMap[h.icon] ?? Layers;
                return (
                  <div
                    key={h.label}
                    className="group p-4 rounded-xl border border-white/8 bg-surface/40 hover:border-accent/40 transition-colors"
                  >
                    <div className="mb-3 inline-flex p-2 rounded-lg bg-accent-soft text-accent group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <p className="text-sm font-medium text-slate-200">{h.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
