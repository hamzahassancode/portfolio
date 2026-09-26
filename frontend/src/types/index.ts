export interface Profile {
  fullName: string;
  title: string;
  bio: string;
  email?: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumeUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
  techStack: string[];
  featured: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceHighlight {
  name?: string;
  points: string[];
}

export interface Experience {
  role: string;
  type: string;
  company: string;
  period: string;
  current: boolean;
  highlights: ExperienceHighlight[];
  tech: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}
