"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { id: 1, name: "Assets Protected", value: "$500M+", description: "In client financial & digital assets" },
  { id: 2, name: "Uptime Delivered", value: "99.99%", description: "Enterprise-grade reliability" },
  { id: 3, name: "Global Clients", value: "250+", description: "Trusting our next-gen solutions" },
  { id: 4, name: "Threats Blocked", value: "10M+", description: "Anomalies detected & neutralized" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center pb-16">
            <h2 className="text-3xl font-bold font-outfit tracking-tight text-slate-900 dark:text-white sm:text-4xl text-glow">
              Impact That Speaks For Itself
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              We deliver measurable results and uncompromised security.
            </p>
          </div>
          
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id} 
                className="mx-auto flex max-w-xs flex-col gap-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <dt className="text-base leading-7 text-slate-500 dark:text-slate-400 font-medium">{stat.name}</dt>
                <dd className="order-first text-5xl font-semibold font-outfit tracking-tight text-slate-900 dark:text-white sm:text-6xl text-glow">
                  {stat.value}
                </dd>
                <dd className="text-sm text-slate-500 dark:text-slate-500">{stat.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
