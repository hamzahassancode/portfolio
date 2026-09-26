import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';

const allTechs = Array.from(new Set(projects.flatMap(p => p.techStack))).sort();

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 border ${
        active
          ? 'bg-caramel-600 text-cream-50 border-caramel-600'
          : 'bg-cream-50 text-cocoa-700 border-cream-300 hover:border-caramel-300 hover:text-caramel-700'
      }`}
    >
      {label}
    </button>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? projects.filter(p => p.techStack.includes(filter)) : projects;

  return (
    <div className="pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="eyebrow text-center mb-3">Portfolio</p>
      <h1 className="section-title text-center">Projects</h1>
      <p className="section-subtitle text-center">Everything I've built</p>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <FilterChip label="All" active={filter === null} onClick={() => setFilter(null)} />
        {allTechs.map(tech => (
          <FilterChip
            key={tech}
            label={tech}
            active={filter === tech}
            onClick={() => setFilter(filter === tech ? null : tech)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
