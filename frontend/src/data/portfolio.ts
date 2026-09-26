import type { Certification, Education, Experience, Profile, Project, SkillGroup } from '../types';

export const profile: Profile = {
  fullName: 'Hamza Hassan',
  title: 'Software Engineer',
  bio: 'Software engineer who builds reliable backend systems and the products on top of them. I have worked on messaging platforms, marketing automation, and banking integrations, mostly with Kotlin, Java, and Spring Boot, and I am comfortable across the stack. I care about clean code, solid tests, and software that holds up in production.',
  email: 'hamzahassancode@gmail.com',
  location: 'Amman, Jordan',
  githubUrl: 'https://github.com/hamzahassancode',
  linkedinUrl: 'https://linkedin.com/in/hamzahassan0',
  resumeUrl: `${import.meta.env.BASE_URL}Hamza_Hassan_CV.pdf`,
};

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    type: 'Full-time',
    company: 'BusinessChat',
    period: 'Jun 2026 – Present',
    current: true,
    highlights: [
      {
        name: 'Multichannel inbox',
        points: [
          'Integrated Instagram, Facebook Messenger, and Telegram into the shared inbox, end to end: account connection and provisioning, webhook verification, and inbound and outbound messaging.',
          'Delivered rich messaging features across channels: media and albums, reactions, message edits, delivery and read statuses, typing indicators, ice breakers, and persistent menus.',
          'Refactored inbound message handling into a single pipeline with one adapter per channel (WhatsApp, Instagram, Messenger, TikTok, Telegram, and LiveChat), unifying deduplication, contact resolution, and latency telemetry.',
        ],
      },
      {
        name: 'Marketing automation & WhatsApp',
        points: [
          'Built webhook-triggered automations with filtering rules, per-filter variable mappings, and configurable request security.',
          'Shipped automations for OTP verification with WhatsApp authentication templates, CSAT feedback, purchase reviews, and e-invoices.',
          'Switched outbound WhatsApp audio to native voice messages with an OGG/Opus transcoding path, and fixed template-send failures.',
          'Extended billing with prepaid plans and per-channel service-message pricing.',
        ],
      },
      {
        name: 'Platform & engineering',
        points: [
          'Built event-driven services on Google Cloud: publishing and consuming Protobuf events over Pub/Sub with backward-compatible schema changes, deployed on Cloud Run.',
          'Used Redis for caching, deduplication, rate limiting, and feature flags in a multi-tenant SaaS platform.',
          'Modelled data in PostgreSQL with Flyway migrations and type-safe jOOQ queries, and fed analytics and reporting views in BigQuery.',
          'Wrote non-blocking Kotlin services with coroutines on reactive Spring, and made webhook and message processing reliable with idempotency, retries, rate limits, circuit breakers, and HMAC signature checks.',
          'Added tracing and latency telemetry, backed changes with integration tests (WireMock, real databases), and kept OpenAPI-generated clients in sync for web and iOS.',
          'Worked across an ongoing Scala-to-Kotlin migration, and used an AI-assisted workflow (Claude Code) for planning, implementation, and code review.',
        ],
      },
    ],
    tech: ['Kotlin', 'Coroutines', 'Spring Boot', 'Scala', 'React', 'TypeScript', 'PostgreSQL', 'jOOQ', 'Flyway', 'Redis', 'Pub/Sub', 'Protobuf', 'BigQuery', 'Cloud Run', 'WireMock', 'Meta Graph API'],
  },
  {
    role: 'Software Engineer',
    type: 'Full-time',
    company: 'ProgressSoft',
    period: 'Sep 2024 – May 2026',
    current: false,
    highlights: [
      {
        name: 'PayHub',
        points: [
          'Core team member on PayHub, a platform for banking and payment integrations.',
          'Implemented SWIFT MT structural validation and financial message parsing to SWIFT standards.',
          'Built Java and Spring Boot services and RESTful APIs for financial transaction processing.',
          'Wrote unit and integration tests with JUnit, Mockito, WireMock, and RestAssured; contributed to GitLab CI/CD with Docker and Kubernetes.',
        ],
      },
      {
        name: 'Payment Messages Agentic Workflow',
        points: [
          'Contributed to a proof of concept for an AI coding agent that replaces core Prowide Core functionality in banking integrations.',
          'Designed an agentic workflow for bidirectional conversion between SWIFT MT and ISO 20022 MX messages.',
          'Built AI-assisted validation pipelines for both MT and MX messages, implemented entirely in Kotlin.',
        ],
      },
    ],
    tech: ['Kotlin', 'Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes', 'GitLab CI/CD'],
  },
  {
    role: 'Software Developer',
    type: 'Full-time',
    company: 'Leading Point',
    period: 'Apr 2024 – Sep 2024',
    current: false,
    highlights: [
      {
        points: [
          'Led development of an automation API with Python and FastAPI, cutting manual work for the process team.',
          'Streamlined data retrieval from Azure DevOps, SharePoint, and SonarQube.',
          'Built Q-POINT, a Django-based process management system, and managed its PostgreSQL databases.',
          'Fixed bugs and designed new pages in React for the Vision Point project.',
        ],
      },
    ],
    tech: ['Python', 'FastAPI', 'Django', 'React', 'PostgreSQL'],
  },
  {
    role: 'Software Engineering Intern',
    type: 'Internship',
    company: 'Wiley / Atypon',
    period: 'May 2023 – Oct 2023',
    current: false,
    highlights: [
      {
        points: [
          'Built a decentralized, cluster-based NoSQL database with Java, Spring Boot, and Docker.',
          'Created a web app comparing Sockets, Servlets, and Spring Boot to show how Java web technology evolved.',
          'Designed an extensible Uno game engine with OOP and design patterns, and a multithreaded Old Maid card game.',
          'Practised DevOps: Git workflows, Docker-based microservices, and Linux shell scripting.',
        ],
      },
    ],
    tech: ['Java', 'Spring Boot', 'Docker', 'Linux', 'Git'],
  },
];

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', skills: ['Kotlin', 'Java', 'Scala', 'Python', 'TypeScript', 'JavaScript', 'Dart', 'C++'] },
  { category: 'Backend & APIs', skills: ['Spring Boot', 'Kotlin Coroutines', 'RESTful APIs', 'Webhooks', 'Event-driven architecture', 'Protobuf', 'OpenAPI', 'FastAPI', 'Django'] },
  { category: 'Messaging & Integrations', skills: ['WhatsApp Business API', 'Instagram API', 'Messenger API', 'Telegram Bot API'] },
  { category: 'Payments', skills: ['SWIFT MT', 'ISO 20022 MX', 'Message validation', 'Transaction processing'] },
  { category: 'Data', skills: ['PostgreSQL', 'MySQL', 'Redis', 'BigQuery', 'NoSQL', 'jOOQ', 'Flyway', 'Liquibase'] },
  { category: 'Cloud & DevOps', skills: ['Google Cloud', 'Cloud Run', 'Pub/Sub', 'Docker', 'Kubernetes', 'CI/CD', 'Observability', 'Git', 'Linux'] },
  { category: 'Testing', skills: ['JUnit', 'Mockito', 'AssertJ', 'WireMock', 'RestAssured', 'Integration testing'] },
  { category: 'Frontend & Mobile', skills: ['React', 'TypeScript', 'HTML', 'CSS', 'Flutter'] },
];

export const education: Education = {
  degree: 'Bachelor of Engineering, Computer Engineering',
  school: 'University of Jordan',
  location: 'Amman, Jordan',
  period: 'Sep 2019 – Jan 2024',
};

export const certifications: Certification[] = [
  { title: 'ICPC Jordanian Collegiate Programming Contest: 11th place', issuer: 'ICPC', year: '2021' },
  { title: 'Software Engineering Using Java and DevOps', issuer: 'Wiley / Atypon' },
  { title: 'The Complete Flutter & Dart Development Course', issuer: 'Udemy' },
];

export const projects: Project[] = [
  {
    title: 'Decentralized Cluster-Based NoSQL Database',
    description:
      'A decentralized NoSQL database with its own query API instead of SQL, focused on load balancing, data consistency, and efficient queries. A custom bootstrapping node initializes the cluster and assigns users to nodes, and every node holds a replica in its own Docker container, so there is no single point of failure. Includes a school registration demo app.',
    techStack: ['Java', 'Spring Boot', 'Docker', 'Distributed Systems'],
    repoUrl: 'https://github.com/hamzahassancode/Decentralized-Cluster-Based-NoSQL-Database',
    featured: true,
  },
  {
    title: 'Water Pump Automation App',
    description:
      'A Flutter app that monitors home water tanks and solar cells through Firebase and Arduino. Users control the pump remotely, switch between manual and automatic modes, and request a refill from nearby water tankers when levels run low.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Arduino'],
    repoUrl: 'https://github.com/hamzahassancode/Flutter-App-Water-pump-Automation',
    featured: true,
  },
  {
    title: 'Cardio Disease Prediction AI',
    description:
      'Predicts cardiovascular disease from a Kaggle dataset of 70,000 records and 13 features. Compares RandomForest, SVC, and XGBoost with a fine-tuned Keras model that reached 72% accuracy and 88% recall at a 0.3 threshold.',
    techStack: ['Python', 'Keras', 'XGBoost', 'Machine Learning'],
    repoUrl: 'https://github.com/hamzahassancode/Cardio-Disease-Prediction-AI',
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
      'A full-stack money transfer application built with a Spring Boot backend and React frontend, enabling users to manage accounts and perform secure fund transfers.',
    techStack: ['Java', 'Spring Boot', 'React', 'REST API'],
    repoUrl: 'https://github.com/hamzahassancode/cliq-transfer-springboot-react',
    featured: false,
  },
  {
    title: 'Uno Game Engine',
    description:
      'An extensible Uno card game engine built with object-oriented design patterns, enabling developers to build and extend Uno game variants with minimal effort.',
    techStack: ['Java', 'OOP', 'Design Patterns'],
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
  {
    title: 'Home Decor Shop',
    description:
      'A responsive storefront for home decor, built with plain HTML, CSS, and JavaScript, with layouts that adapt cleanly across devices and screen sizes.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    repoUrl: 'https://github.com/hamzahassancode/Home-Decor-Shop-HTML-CSS-JS',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description:
      'This site: a static React and TypeScript portfolio styled with Tailwind CSS and deployed to GitHub Pages, with a Kotlin Spring Boot API in the same repository.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Kotlin'],
    repoUrl: 'https://github.com/hamzahassancode/portfolio',
    featured: false,
  },
];

export const featuredProjects = projects.filter(p => p.featured);
