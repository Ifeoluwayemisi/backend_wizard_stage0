# Overview
This project is my submission for **Backend Stage 0 - ** a warm-up challenge designed to test your ability to build and structure a simple RESTful API.

The task was to create a **GET /me endpoint** that returns:
- My profile info (email, name, some backend track)
- A dynamic **cat fact** fetched from the [Cat Fact API](https://catfact.ninja/fact)
- A real-time **timestamp** in ISO 8601 (UTC) format

# Features 
- Dynamic timestamp (updates every request)
- Graceful error handling if external API fails
- Integrates external API (Cat Facts)
- Returns structured JSON response
- Configurable via environment variables
- Ready for deployment on Railway

# Tech Stack
- Node.js - Backend runtime
- Express.js - Web framework
- Axios - For making HTTP requests
- Dotenv - Environment variable management
- CORS - Cross-Origin support

# Project Structure
```bash
backend-wizards-stage0/
├── .env
├── package.json
├── server.js
├── package-lock.json
└── README.md
```

# Installation & Setup
### Clone the Repository
```bash
git clone 
