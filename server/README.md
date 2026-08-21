# Portfolio Backend

Express + MongoDB API that stores contact form submissions.

## Setup

1. Install dependencies:
   ```bash
   cd server
   npm install
   ```

2. Copy the env template and configure:
   ```bash
   cp .env.example .env
   ```
   - `MONGODB_URI` — your MongoDB connection string (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
   - `PORT` — API port (defaults to 3001)
   - `CLIENT_URL` — the frontend origin allowed by CORS (defaults to `http://localhost:5173`)

3. Start the API:
   ```bash
   npm run dev
   ```

## Endpoints

- `GET /api/health` — health check + DB status
- `POST /api/contact` — store a contact submission
  - Body: `{ "name": string, "email": string, "message": string }`
  - Returns: `{ "success": true, "id": string }`

The Vite dev server proxies `/api` to `http://localhost:3001`, so the frontend can call `/api/contact` directly.
