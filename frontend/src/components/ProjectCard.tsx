import type { Project } from '../types';
import { ExternalIcon, GitHubIcon } from './Icons';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="card flex flex-col h-full group hover:-translate-y-1">
      {project.imageUrl ? (
        <div className="overflow-hidden rounded-xl mb-5">
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex items-center justify-between mb-5">
          <span className="w-11 h-11 rounded-xl bg-caramel-100 text-caramel-700 font-serif text-xl font-semibold flex items-center justify-center">
            {project.title.charAt(0).toUpperCase()}
          </span>
          {project.featured && (
            <span className="text-[11px] uppercase tracking-wider font-semibold text-sage-700 bg-sage-100 px-2.5 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
      )}

      <div className="flex-1">
        <h3 className="font-serif text-xl font-semibold leading-snug mb-2 group-hover:text-caramel-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-cocoa-500 text-sm leading-relaxed mb-5">{project.description}</p>
        <ul className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map(tech => (
            <li key={tech} className="tag">{tech}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 pt-4 border-t border-cream-300">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cocoa-700 hover:text-caramel-600 transition-colors"
          >
            <GitHubIcon />
            View code
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-caramel-600 hover:text-caramel-700 transition-colors"
          >
            <ExternalIcon />
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
