import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Rocket, Store, Code2, Brush, WordPress, Star, Sparkles } from 'lucide-react';

function useReveal(offset = '0px') {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { margin: `0px 0px -${offset} 0px`, once: true });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return { ref, controls };
}

export function ServicesPreview() {
  const cards = [
    { icon: Store, title: 'Shopify Development', desc: 'High‑converting storefronts and custom themes.' },
    { icon: Code2, title: 'Custom Website Builds', desc: 'Lightning‑fast, SEO‑friendly sites with modern stacks.' },
    { icon: WordPress, title: 'WordPress Development', desc: 'Flexible CMS builds with performance in mind.' },
    { icon: Brush, title: 'Branding & UI/UX', desc: 'Clear, conversion‑driven design systems and visuals.' },
  ];

  const { ref, controls } = useReveal('20%');

  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center"
        >
          What We Do
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const points = [
    { title: 'Performance-first', desc: 'We obsess over speed, accessibility, and SEO.' },
    { title: 'Conversion-led', desc: 'Design rooted in real business outcomes.' },
    { title: 'Flexible & scalable', desc: 'Built to grow with your brand and tech stack.' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center"
        >
          Why Choose Us
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-blue-600">
                <Star className="h-5 w-5" />
                <span className="text-sm font-semibold">Standout quality</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkShowcase() {
  const projects = [
    { title: 'Astra Commerce', tag: 'Shopify', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Nimbus UI', tag: 'Custom Web', img: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Paperwave', tag: 'WordPress', img: 'https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Nova Brand', tag: 'Branding', img: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1400&auto=format&fit=crop' },
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center"
        >
          Recent Work
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm"
            >
              <img src={p.img} alt={p.title} className="h-52 w-full object-cover" />
              <div className="p-4">
                <span className="text-xs font-semibold text-blue-600">{p.tag}</span>
                <h3 className="mt-1 text-base font-semibold text-gray-900">{p.title}</h3>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all p-4">
                <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow">View Project →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-blue-600 to-blue-500 p-10 sm:p-16 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s Build Something Together</h3>
            <p className="mt-3 text-blue-100">Ready to launch or level up? Tell us about your project and we’ll make it real.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="mailto:hello@websemblestudios.com" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-blue-700 font-semibold shadow hover:bg-blue-50">Email Us</a>
              <a href="#" className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10">Book a Call</a>
            </div>
            <p className="mt-6 text-sm text-blue-100">📧 hello@websemblestudios.com • 🌐 www.websemblestudios.com • 📍 India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
