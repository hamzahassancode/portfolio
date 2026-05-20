import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SkillsSection from '../components/SkillsSection';
import ProjectCard from '../components/ProjectCard';
import { fetchProfile, fetchSkills, fetchProjects } from '../api/portfolioApi';
import type { Profile, Skill, Project } from '../types';

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [groupedSkills, setGroupedSkills] = useState<Record<string, Skill[]>>({});
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetchProfile(),
      fetchSkills(),
      fetchProjects(true),
    ])
      .then(([p, s, proj]) => {
        setProfile(p);
        setGroupedSkills(s);
        setFeaturedProjects(proj);
      })
      .catch(() => setError('Failed to load portfolio data. Is the backend running?'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <button onClick={() => window.location.reload()} className="btn-primary">Retry</button>
        </div>
      </div>
    );
  }

  return (
    <>
      {profile && <Hero profile={profile} />}

      {Object.keys(groupedSkills).length > 0 && (
        <SkillsSection groupedSkills={groupedSkills} />
      )}

      {featuredProjects.length > 0 && (
        <section className="py-20 max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Featured Projects</h2>
          <p className="section-subtitle text-center">Some of my recent work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="btn-outline">View All Projects →</Link>
          </div>
        </section>
      )}
    </>
  );
}
