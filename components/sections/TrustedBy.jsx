"use client";

import Marquee from "react-fast-marquee";
import { Network, ShieldCheck, Database, Cloud, Cpu, Lock } from "lucide-react";

const companies = [
  { name: "Nexus", icon: Network },
  { name: "Fortify", icon: ShieldCheck },
  { name: "DataCore", icon: Database },
  { name: "AeroCloud", icon: Cloud },
  { name: "Synapse AI", icon: Cpu },
  { name: "Vault", icon: Lock },
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-gray-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/50 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-slate-50 before:to-transparent dark:before:from-slate-900/50 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-slate-50 after:to-transparent dark:after:from-slate-900/50 z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">Trusted by Industry Leaders</p>
      </div>

      <Marquee gradient={false} speed={40} className="py-4">
        {companies.map((company, index) => (
          <div key={index} className="flex items-center gap-3 mx-12 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 grayscale hover:grayscale-0">
            <company.icon className="w-8 h-8" />
            <span className="text-2xl font-bold font-outfit tracking-tight">{company.name}</span>
          </div>
        ))}
        {/* Duplicate list to ensure seamless looping visually if fast */}
        {companies.map((company, index) => (
          <div key={`dup-${index}`} className="flex items-center gap-3 mx-12 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 grayscale hover:grayscale-0">
            <company.icon className="w-8 h-8" />
            <span className="text-2xl font-bold font-outfit tracking-tight">{company.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
