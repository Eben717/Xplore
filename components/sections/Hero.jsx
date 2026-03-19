"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 pt-20">
      {/* Background radial subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center z-10"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="inline-block py-1.5 px-4 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm font-semibold tracking-wider text-slate-700 dark:text-slate-300 uppercase shadow-sm">
            Innovate • Protect • Grow
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 leading-[1.1]"
        >
          Empowering Your Business With <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Next-Generation Solutions
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          From precision Accounting and Taxation to elite Cybersecurity and AI.
          Xplore is the definitive partner for your digital and financial
          transformation.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-lg hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all transform hover:-translate-y-0.5"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 font-semibold text-lg hover:border-slate-900 dark:hover:border-white transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
