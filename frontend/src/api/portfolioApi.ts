import axios from 'axios';
import type { Profile, Project, Skill, ContactRequest } from '../types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
});

export const fetchProfile = (): Promise<Profile> =>
  api.get<Profile>('/api/profile').then(r => r.data);

export const fetchProjects = (featured?: boolean): Promise<Project[]> =>
  api.get<Project[]>('/api/projects', { params: featured !== undefined ? { featured } : {} }).then(r => r.data);

export const fetchProject = (id: number): Promise<Project> =>
  api.get<Project>(`/api/projects/${id}`).then(r => r.data);

export const fetchSkills = (): Promise<Record<string, Skill[]>> =>
  api.get<Record<string, Skill[]>>('/api/skills', { params: { grouped: true } }).then(r => r.data);

export const sendContact = (request: ContactRequest): Promise<{ success: boolean; messageId: number }> =>
  api.post('/api/contact', request).then(r => r.data);
