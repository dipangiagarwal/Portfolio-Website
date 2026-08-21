import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';

const isPlaceholder = (url) => !url || url.startsWith('[ADD');

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-6 sm:py-8 px-5 sm:px-8">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb ambient-orb-cyan" style={{ top: '15%', right: '5%' }} />
        <div className="ambient-orb ambient-orb-violet" style={{ bottom: '10%', left: '3%' }} />
      </div>

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-accent mb-2">WHAT I BUILD</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 100}>
              <TiltCard className="surface-card h-full rounded-xl overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-surface-raised to-ink-soft border-b border-white/5">
                    <img
                      src={project.image}
                      alt={project.name}
                      className={`w-full h-full object-cover ${
                        isPlaceholder(project.image) ? 'opacity-0' : 'opacity-100'
                      } transition-opacity`}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      style={{ display: isPlaceholder(project.image) ? 'flex' : 'none' }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="absolute inset-0 hero-grid opacity-[0.08]" />
                      <div className="relative text-center px-4">
                        <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center">
                          <Github size={22} className="text-accent" />
                        </div>
                        <p className="text-xs font-mono text-muted">
                          {project.name}
                        </p>
                        <p className="mt-1 text-[10px] text-slate-500">
                          Add image to data file
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-white group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                      {project.features.slice(0, 5).map((f) => (
                        <li
                          key={f}
                          className="text-xs text-slate-500 flex items-center gap-1"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent/60" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs font-mono text-muted bg-white/[0.04] border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                      {isPlaceholder(project.github) ? (
                        <span
                          title="GitHub URL not added yet"
                          className="p-2 rounded-md text-slate-600 cursor-not-allowed"
                        >
                          <Github size={18} />
                        </span>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} GitHub`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted bg-white/[0.04] border border-white/8 hover:text-accent hover:border-accent/40 transition-colors"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                      {isPlaceholder(project.demo) ? (
                        <span
                          title="Live demo not added yet"
                          className="p-2 rounded-md text-slate-600 cursor-not-allowed"
                        >
                          <ExternalLink size={18} />
                        </span>
                      ) : (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} live demo`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-ink bg-accent hover:bg-accent-hover transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
