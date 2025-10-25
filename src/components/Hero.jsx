import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[100svh] pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100svh-4rem)] flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            Interactive portfolio • tech • playful • modern
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight"
          >
            Vibe Coder. Full‑Stack Developer. AI Specialist.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl"
          >
            I build end‑to‑end products powered by modern web stacks and practical AI. From design systems and APIs to LLM apps, agents, and MLOps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a href="#projects" className="pointer-events-auto inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-medium hover:bg-zinc-200 transition">
              <Rocket className="w-5 h-5" />
              Explore Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white px-5 py-3 rounded-xl font-medium hover:bg-white/20 transition">
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
