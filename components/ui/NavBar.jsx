"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={clsx(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "px-4 md:px-8" : "px-4 md:px-12"
      )}
    >
      <div className={clsx(
        "mx-auto transition-all duration-500 transform",
        scrolled 
          ? "max-w-4xl bg-white/70 dark:bg-[#0a0e14]/70 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-full shadow-2xl py-3 px-6" 
          : "max-w-7xl bg-transparent py-4 px-2"
      )}>
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex drop-shadow-sm items-center gap-2">
              <span className="text-2xl font-bold font-outfit bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform">
                Xplore.
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors border border-transparent dark:border-white/5"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>
            )}

            <a
              href="#contact"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10 text-white text-sm font-semibold hover:shadow-lg transition-all"
            >
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900 dark:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-white/90 dark:bg-[#0a0e14]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-6"
          >
            <div className="space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-medium text-slate-900 dark:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center py-3 rounded-xl bg-blue-600 text-white font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
