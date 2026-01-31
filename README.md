🐼 Visa Slot Alert Tracker – The Flying Panda

A mini internal tool to track visa slot alerts for different countries and visa types.
Built using Node.js + Express for backend and React for frontend.

⚙️ Setup Steps
Backend

Open terminal in backend folder.

Install dependencies:

npm install


Start server:

node server.js


Backend runs at:

http://localhost:5000

Frontend

Open terminal in frontend folder.

Install dependencies:

npm install


Start frontend:

npm start


Frontend runs at:

http://localhost:3000

🧠 Design Decisions

File-based JSON storage: Lightweight, simple for a mini internal tool.

Express routes: CRUD endpoints with proper HTTP status codes.

Middleware: Logger to track API calls; centralized error handling.

Frontend: Minimal UI with React, calling backend API using fetch.

Filters: Backend supports query filters for country and status.

🏗️ What I’d Improve for Production

Replace file storage with a database (MongoDB/PostgreSQL) for persistence.

Add authentication and authorization.

Input validation for backend and frontend.

Pagination and search for alert lists.

UI/UX improvements and responsive design.

Dockerization and deployment to cloud.

🤖 Where AI Helped vs Where I Had to Think

AI Helped With:

Boilerplate setup for React and Express

Code structuring suggestions

Debugging hints and syntax reminders

My Own Thinking:

Designing the API and data model

Handling file storage safely

Debugging CORS and runtime errors

Connecting frontend and backend

Deciding trade-offs between simplicity and scalability
