import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Bot, Network, Database } from 'lucide-react';

const projects = [
  {
    title: 'NeuraFlow: LLM Agent Orchestrator',
    description:
      'A framework for building multi-agent systems with tool use, memory, and streaming reasoning. Ships with OpenAI, Anthropic, and local model adapters.',
    tags: ['TypeScript', 'Node', 'LLM Agents', 'WebSockets'],
    icon: Bot,
    links: { github: '#', demo: '#' },
    gradient: 'from-purple-500/30 via-fuchsia-500/20 to-cyan-500/20',
  },
  {
    title: 'VisionGuard: AI Content Safety',
    description:
      'Real-time image/video moderation using CLIP embeddings and lightweight detectors. Deployed as a scalable edge API with caching.',
    tags: ['Python', 'FastAPI', 'CLIP', 'Edge'],
    icon: Brain,
    links: { github: '#', demo: '#' },
    gradient: 'from-rose-500/20 via-amber-500/10 to-emerald-500/20',
  },
  {
    title: 'CodePilot: Pair Programmer',
    description:
      'Context-aware code assistant with repo indexing, RAG, and AST-aware refactors. VS Code extension + server with semantic search.',
    tags: ['Rust', 'RAG', 'Embeddings', 'VS Code'],
    icon: Network,
    links: { github: '#', demo: '#' },
    gradient: 'from-sky-500/20 via-indigo-500/10 to-purple-500/20',
  },
  {
    title: 'DataWeave: Realtime Analytics',
    description:
      'Stream ingestion, windowed aggregations, and serverless OLAP with a modern dashboard. AI copilots craft queries and insights.',
    tags: ['Next.js', 'tRPC', 'ClickHouse', 'Tailwind'],
    icon: Database,
    links: { github: '#', demo: '#' },
    gradient: 'from-emerald-500/20 via-cyan-500/10 to-blue-500/20',
  },
];

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition pointer-events-none`} />
      <div className="relative p-6 flex flex-col gap-4">
        <div className="inline-flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/10 border border-white/10 text-white">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-black/40 border border-white/10 text-white/80 text-xs px-2.5 py-1">{t}</span>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <a href={project.links.github} className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm">
            <Github className="w-4 h-4" /> Code
          </a>
          <span className="text-white/20">•</span>
          <a href={project.links.demo} className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm">
            <ExternalLink className="w-4 h-4" /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_30%_at_50%_0%,rgba(168,85,247,0.15),rgba(0,0,0,0))]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            AI‑Powered Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/70 max-w-2xl"
          >
            A selection of work spanning agent systems, computer vision, dev tooling, and real‑time analytics — designed for performance and delightful UX.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
