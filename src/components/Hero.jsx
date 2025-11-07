import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <span className="inline-block rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100">Modern Web Agency</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Websemble Studios
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">We build brands that click. Custom sites, blazing-fast stores, and thoughtful design that converts.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors">Get Started</a>
              <a href="#work" className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition-colors">View Our Work</a>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
}
