import type { Project } from '../types';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="card flex flex-col h-full">
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-44 object-cover rounded-lg mb-4"
        />
      )}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-white font-semibold text-lg">{project.title}</h3>
          {project.featured && (
            <span className="text-xs bg-primary-600 text-white px-2 py-0.5 rounded-full ml-2 shrink-0">Featured</span>
          )}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <span key={tech} className="text-xs bg-dark-700 text-primary-300 px-2 py-1 rounded">{tech}</span>
          ))}
        </div>
      </div>
      <div className="flex gap-3 mt-auto">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-outline text-sm py-1.5 px-4">
            GitHub
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-primary text-sm py-1.5 px-4">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
