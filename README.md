# Portfolio

Full-stack portfolio website built with **Kotlin + Spring Boot 3** (backend) and **React + TypeScript** (frontend).

## Tech Stack

| Layer    | Technology                              |
|----------|-----------------------------------------|
| Backend  | Kotlin, Spring Boot 3, Spring Data JPA  |
| Database | PostgreSQL (prod) / H2 (dev)            |
| Migrations | Liquibase                             |
| Frontend | React, TypeScript, Vite, Tailwind CSS   |
| API comm | Axios, REST                             |

## Project Structure

```
portfolio/
├── backend/     # Spring Boot API
└── frontend/    # React SPA
```

## Getting Started

### Backend

```bash
cd backend

# Dev mode (H2 in-memory, no PostgreSQL needed)
./gradlew bootRun --args='--spring.profiles.active=dev'

# Production (requires PostgreSQL)
export DATABASE_URL=jdbc:postgresql://localhost:5432/portfolio
export DATABASE_USERNAME=postgres
export DATABASE_PASSWORD=yourpassword
./gradlew bootRun --args='--spring.profiles.active=prod'
```

The API runs on http://localhost:8080

### Frontend

```bash
cd frontend
cp .env.example .env        # Edit VITE_API_URL if needed
npm install
npm run dev
```

The frontend runs on http://localhost:5173

## API Endpoints

| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| GET    | /api/profile           | Get personal profile     |
| GET    | /api/projects          | List all projects        |
| GET    | /api/projects?featured=true | Featured projects   |
| GET    | /api/projects/{id}     | Single project           |
| GET    | /api/skills?grouped=true | Skills by category     |
| POST   | /api/contact           | Submit contact message   |

## Customizing Content

Update the seed data in `backend/src/main/resources/db/changelog/db.changelog-1.0.xml` with your real name, bio, projects, and skills.
