
# FoundPet API 🐾

Backend service built with Bun and Elysia, focused on performance, type safety, and a clean modular architecture.
This project serves as the backend for the FoundPet application, responsible for managing pets, health checks, and future domain modules.
## 🚀 Tech Stack

+ Runtime: Bun

+ Framework: Elysia

+ Database: SQLite

+ ORM: Drizzle ORM

+ Language: TypeScript

+ Validation: TypeBox (Elysia standard)
## ⚙️ Getting Started

### Pre-requisites

Bun installed (v1.0+)

### Installation

Clone the repository and install dependencies:

```bash
bun install
```
## 🧪 Running the Application

Start the development server:

```bash
bun run dev
```

The API will be available at:

http://localhost:3000
## 📌 Health Check

Example endpoint:

GET /health

Response:

{
  "status": "ok"
}
## 🧠 Design Principles

Modular architecture by domain

DTO-driven validation

Clear separation of concerns

HTTP semantics respected (status codes, PATCH behavior, etc.)

Minimal abstractions, maximum clarity


## Autores

- [@igorpardinho](https://www.github.com/igorpardinho)




