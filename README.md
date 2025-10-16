# 🧠 Backend Wizards Stage 0 — Dynamic Profile Endpoint

A simple RESTful API built with **Node.js + Express** that returns my profile information and a random cat fact fetched from the **Cat Facts API**.

---

## 🚀 Features
- `/me` GET endpoint returning JSON data  
- Dynamic timestamp in ISO 8601 format  
- Random cat fact fetched from external API  
- Graceful error handling  
- Rate-limiting (100 requests / 15 min per IP)  
- Lightweight, beginner-friendly code structure

---

## 📂 API Endpoint
### GET `/me`

**Response:**
```json
{
  "status": "success",
  "user": {
    "email": "paulyusuf2000@gmail.com",
    "name": "Paul Yusuf",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}

⚙️ Installation & Usage

Clone repo

git clone https://github.com/PaulsCreate/HNG13_Stage-0.git
cd HNG13_Stage-0


Install dependencies

npm install

Run server locally:

npm start
Server runs on http://localhost:3000/me

🧰 Dependencies

express
axios
express-rate-limit

🌍 Environment Variables
Variable	Description	Example
PORT	Port to run server	3000
🧪 Testing

Use Postman or curl:

curl http://localhost:3000/me


Should return a valid JSON with a live cat fact.

🛠️ Deployment

Deployable on:
Railway
Render
Heroku
AWS Elastic Beanstalk

PXXL App

🧩 Lessons Learned

API integration & external requests

Proper JSON formatting

Using async/await & error handling

Implementing rate limiting for endpoint security

Writing clear project documentation

🧑‍💻 Author
Paul Yusuf
Backend Developer | Cybersecurity Enthusiast
📧 paulyusuf2000@gmail.c
