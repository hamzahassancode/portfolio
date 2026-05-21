import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SkillsSection from '../components/SkillsSection';
import ProjectCard from '../components/ProjectCard';
import { fetchProfile, fetchSkills, fetchProjects } from '../api/portfolioApi';
import { useInView } from '../hooks/useInView';
import type { Profile, Skill, Project } from '../types';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}

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
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 text-sm">Loading portfolio…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <p className="text-red-400 text-lg font-medium mb-2">Connection Error</p>
          <p className="text-gray-500 text-sm mb-6">{error}</p>
          <button onClick={() => window.location.reload()} className="btn-primary">
            Try Again
          </button>
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
        <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="section-title text-center">Featured Projects</h2>
            <p className="section-subtitle text-center">Some of my recent work</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/projects" className="btn-outline">
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </section>
      )}
    </>
  );
}
