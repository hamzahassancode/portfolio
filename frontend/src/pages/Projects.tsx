import { useEffect, useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects } from '../api/portfolioApi';
import type { Project } from '../types';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .finally(() => setLoading(false));
  }, []);

  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(p => p.techStack.forEach(t => techs.add(t)));
    return Array.from(techs).sort();
  }, [projects]);

  const filtered = filter ? projects.filter(p => p.techStack.includes(filter)) : projects;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 text-sm">Loading projects…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="section-title text-center">Projects</h1>
      <p className="section-subtitle text-center">Everything I've built</p>

      {allTechs.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              filter === null
                ? 'bg-primary-600 text-white shadow-md shadow-primary-500/20'
                : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700 border border-dark-700'
            }`}
          >
            All
          </button>
          {allTechs.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(filter === tech ? null : tech)}
              className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === tech
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-500/20'
                  : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700 border border-dark-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 bg-dark-800 rounded-2xl flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <p className="text-gray-400 font-medium mb-1">
            {filter ? `No projects use "${filter}"` : 'No projects yet'}
          </p>
          {filter && (
            <button
              onClick={() => setFilter(null)}
              className="text-sm text-primary-400 hover:text-primary-300 mt-2 transition-colors"
            >
              Clear filter
            </button>
          )}
        </div>
      )}
    </div>
  );
}
