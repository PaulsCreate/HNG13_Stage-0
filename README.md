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
