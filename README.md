# 🐼 Visa Slot Alert Tracker  
### Internal Tool for *The Flying Panda*

- A mini full-stack internal tool to track visa slot alerts by country, city, visa type, and status.  
Built using **Node.js + Express** (backend) and **React** (frontend).

---

## 📌 Features

- Create visa slot alerts  
- View alerts in a list/table format  
- Update alert status (Active / Booked / Expired)  
- Delete alerts  
- Filter alerts by country or status  
- RESTful API with proper HTTP status codes  

---

## 🧱 Tech Stack

### Backend
- Node.js
- Express.js
- File-based JSON storage
- Custom middleware (logger & error handler)

### Frontend
- React
- Fetch API
- Simple, clean UI

---

## 📂 Data Model

Each alert contains:

id
country
city
visaType (Tourist / Business / Student)
status (Active / Booked / Expired)
createdAt


---

# ⚙️ Setup Instructions

## 1️⃣ Backend Setup

```bash
cd backend
npm install
node server.js
```

### Server runs at:
```
http://localhost:5000
```
## 2️⃣ Frontend Setup
```
cd frontend
npm install
npm start
```
### Frontend runs at:
```
http://localhost:3000
```
## 🔌 API Endpoints
Method	Endpoint	Description
```
GET	/alerts	Fetch all alerts
POST	/alerts	Create a new alert
PUT	/alerts/:id	Update alert status
DELETE	/alerts/:id	Delete an alert
```
# Query Filters
```
GET /alerts?country=India
GET /alerts?status=Active
```

## 🧠 Design Decisions
- File-based JSON storage for simplicity and quick setup
- Express Router for clean and modular backend structure
- Custom middleware for logging and centralized error handling
- CORS enabled for frontend-backend communication
- Minimal UI to focus on functionality

  
## 🚀 What I’d Improve for Production
- Replace file storage with a database (MongoDB / PostgreSQL)
- Add authentication and authorization
- Add input validation
- Pagination and advanced filtering
- Improved UI/UX and responsiveness
- Dockerization and cloud deployment

## 🤖 AI Usage Disclosure
### Where AI Helped
- Project structure and boilerplate suggestions
- Syntax guidance and debugging assistance
- Where I Applied My Own Thinking
- API and data model design
- Handling file persistence
- Debugging CORS and runtime issues

Integrating frontend with backend

Making architectural trade-offs
