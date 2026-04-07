"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={ref} className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 pt-20 bg-slate-50 dark:bg-[#020305]">
      {/* Dynamic Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute text-blue-500/10 dark:text-purple-600/15 animate-pulse-slow">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-current blur-[120px] rounded-full pointer-events-none -z-10" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      
      {/* Light Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none dark:opacity-40 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <motion.div
        style={{ opacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto text-center z-10 relative"
      >
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="group relative inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md text-sm font-semibold tracking-wider text-slate-700 dark:text-slate-300 shadow-sm cursor-pointer hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="uppercase">Innovate • Protect • Grow</span>
          </div>
        </motion.div>

        <motion.div variants={item} className="overflow-hidden pb-2">
          <h1 className="text-6xl md:text-8xl font-extrabold font-outfit text-slate-900 dark:text-white tracking-tighter mb-6 leading-[1.05]">
            Empowering Your Business With <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 blur-2xl opacity-20 dark:opacity-40 animate-pulse-slow"></span>
              <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Next-Generation Solutions
              </span>
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={item}
          className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          From precision Accounting and Taxation to elite Cybersecurity and AI.
          Xplore is the definitive partner for your digital transformation.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#services"
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/10 flex items-center justify-center gap-2"
          >
            <span className="relative z-10">Explore Services</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
            <span className="absolute inset-0 group-hover:text-white dark:group-hover:text-slate-900 z-10 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 font-semibold">
              Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 dark:bg-transparent backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 font-medium text-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
