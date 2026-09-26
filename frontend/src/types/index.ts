export interface Profile {
  fullName: string;
  title: string;
  bio: string;
  email?: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  avatarUrl?: string;
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

export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}
