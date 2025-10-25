import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_30%_at_50%_0%,rgba(236,72,153,0.12),rgba(0,0,0,0))]" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Let’s build something brilliant
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/70"
        >
          I’m a computer science student passionate about crafting delightful products with full‑stack engineering and applied AI. Available for internships, freelance, and collaborations.
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:vibe.coder@example.com"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-medium hover:bg-zinc-200 transition"
          >
            <Mail className="w-5 h-5" /> vibe.coder@example.com
          </a>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="inline-flex p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="inline-flex p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
