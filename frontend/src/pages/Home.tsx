import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import ProjectCard from '../components/ProjectCard';
import { ArrowRightIcon } from '../components/Icons';
import { useInView } from '../hooks/useInView';
import {
  certifications,
  education,
  experiences,
  featuredProjects,
  profile,
  projects,
  skillGroups,
} from '../data/portfolio';

const stats = [
  { value: String(experiences.length), label: 'Companies' },
  { value: String(projects.length), label: 'Projects' },
  { value: '11th', label: 'ICPC Jordan 2021' },
];

const currentRole = experiences.find(e => e.current) ?? experiences[0];

const card = {
  role: currentRole.role,
  company: currentRole.company,
  focus: ['Payments', 'SWIFT MT/MX'],
  stack: ['Kotlin', 'Java', 'Spring Boot'],
  location: profile.location ?? '',
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero profile={profile} stats={stats} card={card} />

      <ExperienceSection experiences={experiences} />

      <SkillsSection groups={skillGroups} />

      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="eyebrow text-center mb-3">Selected work</p>
          <h2 className="section-title text-center">Featured Projects</h2>
          <p className="section-subtitle text-center">A few things I've built recently</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-outline">
              View all projects
              <ArrowRightIcon />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <EducationSection education={education} certifications={certifications} />
    </>
  );
}
