"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  ShieldCheck,
  Cpu,
  Headset,
  Network,
  Code,
  Landmark,
  ArrowRight,
} from "lucide-react";
import clsx from "clsx";

const services = [
  {
    id: "accounting",
    category: "Finance",
    title: "Precision Accounting",
    desc: "Unmatched clarity for your financial peace of mind. We balance your books to perfection.",
    icon: Calculator,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "cybersecurity",
    category: "Tech",
    title: "Elite Cybersecurity",
    desc: "Next-gen protection for your critical data via continuous monitoring.",
    icon: ShieldCheck,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: "ai",
    category: "Tech",
    title: "AI & ML Solutions",
    desc: "Harness Neural Networks to uncover insights.",
    icon: Cpu,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "software",
    category: "Tech",
    title: "Custom Software",
    desc: "Bespoke engineered solutions that drive growth.",
    icon: Code,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: "taxation",
    category: "Finance",
    title: "Strategic Taxation",
    desc: "Innovative tax engineering.",
    icon: Landmark,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "infrastructure",
    category: "IT",
    title: "Cloud & Network Infra",
    desc: "Scalable, zero-trust cloud network architecture.",
    icon: Network,
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#020305] relative overflow-hidden">
      {/* Glow spots */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 dark:bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-6xl font-bold font-outfit text-white mb-6"
          >
            Engineering Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advantage
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 font-light"
          >
            Beyond conventional services—we provide architected solutions designed to scale, secure, and accelerate your enterprise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-6 auto-rows-[250px]">
          {services.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              key={service.id}
              className={clsx(
                "group relative rounded-3xl p-8 overflow-hidden glass-card",
                service.className
              )}
            >
              {/* Refractive gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-blue-400 border border-white/10 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300 shadow-lg">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-outfit text-white mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-light text-lg">
                    {service.desc}
                  </p>
                </div>
                
                <div className="pt-6 relative">
                   <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
                   <button className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                     View Details <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
