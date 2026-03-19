"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  ShieldCheck,
  Cpu,
  Headset,
  Network,
  Code,
  Landmark,
} from "lucide-react";

const allServices = [
  {
    id: "accounting",
    category: "Finance",
    title: "Accounting",
    desc: "Precision and transparency for your financial peace of mind. We balance your books to perfection.",
    icon: Calculator,
  },
  {
    id: "taxation",
    category: "Finance",
    title: "Taxation",
    desc: "Expert tax planning and compliance to minimize liability and maximize your growth.",
    icon: Landmark,
  },
  {
    id: "cybersecurity",
    category: "Tech",
    title: "Cybersecurity",
    desc: "Elite protection for your critical data. We identify vulnerabilities before they are exploited.",
    icon: ShieldCheck,
  },
  {
    id: "ai",
    category: "Tech",
    title: "AI Solutions",
    desc: "Harness the power of Artificial Intelligence to automate processes and uncover actionable insights.",
    icon: Cpu,
  },
  {
    id: "it-support",
    category: "Tech",
    title: "IT Support",
    desc: "Reliable, round-the-clock technical assistance ensuring seamless business operations.",
    icon: Headset,
  },
  {
    id: "networking",
    category: "Tech",
    title: "Networking",
    desc: "Robust and scalable network infrastructure tailored to your organizational demands.",
    icon: Network,
  },
  {
    id: "software",
    category: "Tech",
    title: "Software Development",
    desc: "Custom, cutting-edge software applications designed to propel your business forward.",
    icon: Code,
  },
];

export default function Services() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Finance", "Tech"];

  const filteredServices = allServices.filter((s) =>
    filter === "All" ? true : s.category === filter
  );

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Comprehensive solutions tailored to navigate the complexities of modern business with precision and unmatched reliability.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-slate-800 p-1.5 rounded-full shadow-sm border border-gray-200 dark:border-slate-700">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8 }}
              key={service.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none transform -translate-y-4 translate-x-4">
                <service.icon className="w-32 h-32 text-slate-900 dark:text-white" />
              </div>
              
              <div className="w-14 h-14 bg-blue-50 dark:bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
