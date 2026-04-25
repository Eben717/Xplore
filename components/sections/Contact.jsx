"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white dark:bg-[#020305]">
      {/* Abstract Backgrounds */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold font-outfit text-slate-900 dark:text-white mb-6">
                Let's Build the <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Future.</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-light">
                Ready to accelerate your operations? Reach out now and our specialists will architect the perfect solution.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-transparent dark:border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email Us</p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">xplorecompanylimited@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-white/5 flex items-center justify-center text-purple-600 dark:text-purple-400 border border-transparent dark:border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Call Us</p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">+233 248365774</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center h-full"
              >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold font-outfit text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We've received your request and will be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {status === "error" && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded-xl text-sm border border-red-100 dark:border-red-500/20">
                    <AlertCircle className="w-5 h-5" />
                    Please provide all required information.
                  </div>
                )}
                
                <div className="space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white peer placeholder-transparent"
                      placeholder="John Doe"
                    />
                    <label htmlFor="name" className="absolute left-5 -top-2.5 bg-white dark:bg-[#070b12] px-2 text-sm text-slate-500 dark:text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-[#070b12] peer-focus:text-blue-500 cursor-text">
                      Full Name
                    </label>
                  </div>
                  
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white peer placeholder-transparent"
                      placeholder="email@company.com"
                    />
                    <label htmlFor="email" className="absolute left-5 -top-2.5 bg-white dark:bg-[#070b12] px-2 text-sm text-slate-500 dark:text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-[#070b12] peer-focus:text-blue-500 cursor-text">
                      Email Address
                    </label>
                  </div>

                  <div className="relative group">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none dark:text-white peer placeholder-transparent"
                      placeholder="Project details..."
                    />
                    <label htmlFor="message" className="absolute left-5 -top-2.5 bg-white dark:bg-[#070b12] px-2 text-sm text-slate-500 dark:text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-[#070b12] peer-focus:text-blue-500 cursor-text">
                      Message
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-xl bg-slate-900 border border-slate-800 dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {status === "submitting" ? (
                     <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full relative z-10"
                    />
                  ) : (
                    <span className="relative z-10 flex items-center gap-2">
                      Initialize Request <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
