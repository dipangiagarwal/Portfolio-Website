import { useState } from 'react';
import { Linkedin, Mail, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { contact } from '@/data/portfolio';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';

const isPlaceholder = (url) => !url || url.startsWith('[ADD');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields before sending.');
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg('Unable to send your message. Please try again.');
      console.error('Contact form error:', err.message);
    }
  };

  const contactItems = [
    {
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/dipangi-agarwal-42222524b',
      href: contact.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'GitHub',
      value: isPlaceholder(contact.github) ? 'Add GitHub URL' : contact.github,
      href: isPlaceholder(contact.github) ? null : contact.github,
      icon: Github,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-shell py-12 md:py-20 px-5 sm:px-8 bg-ink-soft/30">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb ambient-orb-cyan" style={{ bottom: '10%', right: '5%' }} />
        <div className="ambient-orb ambient-orb-violet" style={{ top: '10%', left: '0%' }} />
      </div>

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-accent mb-2">06. Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {contact.heading}
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted">{contact.text}</p>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="flex flex-col gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const disabled = !item.href;
                const content = (
                  <div
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${
                      disabled
                        ? 'border-white/8 opacity-60 cursor-not-allowed'
                        : 'border-white/8 bg-surface/40 hover:border-accent/40 hover:bg-accent-soft/20'
                    }`}
                  >
                    <span className="inline-flex p-2.5 rounded-lg bg-accent-soft text-accent flex-shrink-0">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-muted">{item.label}</p>
                      <p className="text-sm text-slate-200 truncate">{item.value}</p>
                    </div>
                  </div>
                );
                return disabled ? (
                  <div key={item.label}>{content}</div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="surface-card p-6 rounded-xl flex flex-col gap-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-muted mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-ink-soft/60 border border-white/10 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-muted mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-ink-soft/60 border border-white/10 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-muted mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-ink-soft/60 border border-white/10 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-ink font-semibold text-sm hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 size={16} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
