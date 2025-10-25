import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-white">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white">vibe.coder</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition">Let’s talk</a>
        </div>
      </header>

      <main>
        <section id="home"><Hero /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-white/50 flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Vibe Coder — Built with React, Tailwind & Spline</p>
          <p>Open to internships, freelance, and collabs.</p>
        </div>
      </footer>
    </div>
  );
}
