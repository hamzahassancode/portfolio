export interface Profile {
  id: number;
  fullName: string;
  title: string;
  bio: string;
  email?: string;
  phone?: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  avatarUrl?: string;
  resumeUrl?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
  techStack: string[];
  featured: boolean;
  createdAt: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  iconUrl?: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
