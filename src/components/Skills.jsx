import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Cloud, Sparkles } from 'lucide-react';

const skills = [
  {
    title: 'Full‑Stack',
    icon: Code2,
    items: ['React', 'Next.js', 'Node.js', 'tRPC', 'GraphQL', 'Tailwind', 'Vite'],
  },
  {
    title: 'AI / ML',
    icon: Cpu,
    items: ['PyTorch', 'Transformers', 'RAG', 'LLM Agents', 'OpenAI/Anthropic', 'Vision', 'Prompt Eng.'],
  },
  {
    title: 'Data & Infra',
    icon: Database,
    items: ['Postgres', 'ClickHouse', 'Redis', 'Prisma', 'Airflow', 'dbt', 'MLOps'],
  },
  {
    title: 'Cloud & DevEx',
    icon: Cloud,
    items: ['Docker', 'Kubernetes', 'Vercel', 'Cloudflare', 'AWS', 'CI/CD', 'Observability'],
  },
];

export default function Skills() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_20%_at_50%_0%,rgba(59,130,246,0.1),rgba(0,0,0,0))]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Skills & Stack
            </motion.h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Product‑minded engineering across the stack with a strong focus on applied AI and developer experience.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-white/70">
            <Sparkles className="w-4 h-4 text-purple-400" /> Always learning
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ title, icon: Icon, items }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/10 border border-white/10">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-full bg-black/40 border border-white/10 text-white/80 text-xs px-2.5 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
