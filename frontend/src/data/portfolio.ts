import type { Profile, Project, SkillGroup } from '../types';

export const profile: Profile = {
  fullName: 'Hamza Hassan',
  title: 'Full-Stack Developer',
  bio: 'Passionate developer who loves building elegant solutions to complex problems.',
  email: 'hamzahassancode@gmail.com',
  location: 'Amman, Jordan',
  githubUrl: 'https://github.com/hamzahassancode',
  linkedinUrl: 'https://linkedin.com/in/hamzahassan0',
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    skills: [
      { name: 'Kotlin', level: 5 },
      { name: 'Spring Boot', level: 5 },
      { name: 'Java', level: 4 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 4 },
      { name: 'TypeScript', level: 4 },
    ],
  },
  {
    category: 'Database',
    skills: [{ name: 'PostgreSQL', level: 4 }],
  },
  {
    category: 'DevOps',
    skills: [{ name: 'Docker', level: 3 }],
  },
];

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Kotlin Spring Boot and React.',
    techStack: ['Kotlin', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
    repoUrl: 'https://github.com/hamzahassancode/portfolio',
    featured: true,
  },
  {
    title: 'Cardio Disease Prediction AI',
    description:
      'An AI project predicting cardiovascular diseases by exploring and analyzing a Kaggle dataset. Includes classical machine learning models and fine-tuned neural networks, achieving 73% accuracy with a detailed comparison of model performance.',
    techStack: ['Python', 'Machine Learning', 'Neural Networks', 'Kaggle'],
    repoUrl: 'https://github.com/hamzahassancode/Cardio-Disease-Prediction-AI',
    featured: true,
  },
  {
    title: 'Decentralized Cluster-Based NoSQL Database',
    description:
      'A distributed NoSQL database system handling JSON-based document storage, supporting full DB and document operations. Addresses load balancing, data consistency, security, and efficient node communication. Solves key challenges like document-to-node affinity, optimistic locking, and custom indexing.',
    techStack: ['Java', 'Distributed Systems', 'NoSQL', 'Clustering'],
    repoUrl: 'https://github.com/hamzahassancode/Decentralized-Cluster-Based-NoSQL-Database',
    featured: true,
  },
  {
    title: 'Microservices Student Grades System',
    description:
      'A containerized microservices system for student data collection and analytics. Handles grade tracking, reporting, and analysis across independently deployable services.',
    techStack: ['Java', 'Spring Boot', 'Microservices', 'Docker'],
    repoUrl: 'https://github.com/hamzahassancode/Microservices-system',
    featured: false,
  },
  {
    title: 'Money Transfer Full-Stack App',
    description:
      'A full-stack money transfer application built with Spring Boot backend and React frontend, enabling users to manage accounts and perform secure fund transfers.',
    techStack: ['Spring Boot', 'React', 'Java', 'REST API'],
    repoUrl: 'https://github.com/hamzahassancode/cliq-transfer-springboot-react',
    featured: false,
  },
  {
    title: 'Flutter Water Pump Automation App',
    description:
      'A comprehensive Flutter mobile app for monitoring and managing water pump processes within homes. Provides real-time control and automation of water management systems.',
    techStack: ['Flutter', 'Dart', 'IoT', 'Mobile'],
    repoUrl: 'https://github.com/hamzahassancode/Flutter-App-Water-pump-Automation',
    featured: false,
  },
  {
    title: 'Uno Game Engine',
    description:
      'An extensible Uno card game engine built with object-oriented design patterns, enabling developers to build and extend Uno game variants with minimal effort.',
    techStack: ['Java', 'OOP', 'Design Patterns', 'Game Engine'],
    repoUrl: 'https://github.com/hamzahassancode/Uno-Game-Engine',
    featured: false,
  },
  {
    title: 'The Old Maid Card Game',
    description:
      'A multithreaded Java simulation of the Old Maid card game where each player runs as an independent thread, demonstrating Java concurrency and thread synchronization.',
    techStack: ['Java', 'Multithreading', 'Concurrency'],
    repoUrl: 'https://github.com/hamzahassancode/The-Old-Maid-Card-Game',
    featured: false,
  },
];

export const featuredProjects = projects.filter(p => p.featured);
