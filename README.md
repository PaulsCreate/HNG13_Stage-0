# 🧠 Backend Wizards Stage 0 — Dynamic Profile Endpoint

A simple RESTful API built with **Node.js + Express** that returns my profile information and a random cat fact fetched dynamically from the **Cat Facts API**.

---

## 🚀 Features

- ✅ `/me` GET endpoint returning JSON data
- 🕒 Dynamic timestamp in ISO 8601 format
- 🐱 Random cat fact fetched from an external API
- ⚡ Graceful error handling
- 🔒 Rate-limiting (100 requests / 15 min per IP)
- 🧱 Clean and scalable controller-route-app structure

---

## 📂 API Endpoint

### **GET** `/me`

**Response:**

```json
{
  "status": "success",
  "user": {
    "email": "YourEmailHere@gmail.com",
    "name": "Your Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}
```

## ⚙️ Installation & Usage

1️⃣ Clone the repository

```bash
git clone https://github.com/PaulsCreate/HNG13_Stage-0.git
cd HNG13_Stage-0
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Run the server locally

```bash
npm start
```

The server will run:
`http://localhost:3000/me`

```
4️⃣👇To Run live!! 
(https://profiienfo.up.railway.app)
```

## 🧰 Dependencies

| Package                | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| **express**            | Fast, minimalist web framework for Node.js                |
| **axios**              | Promise-based HTTP client for API calls                   |
| **express-rate-limit** | Middleware to prevent abuse by limiting repeated requests |

🌍 Environment Variables
Variable Description Example
PORT Port number to run the server 3000
🧪 Testing

Test using Postman or curl:

curl http://localhost:3000/me

Should return:

{
"status": "success",
"user": { "email": "paulyusuf2000@gmail.com", "name": "Paul Yusuf", "stack": "Node.js/Express" },
"timestamp": "2025-10-16T12:34:56.789Z",
"fact": "Cats sleep 70% of their lives."
}

🛠️ Deployment

Easily deployable on:

⚙️ Railway

🚀 Render

☁️ Heroku

🧩 AWS Elastic Beanstalk

💡 Lessons Learned

Integrating third-party APIs using Axios

Returning structured and dynamic JSON responses

Implementing rate-limiting for API protection

Using async/await with proper error handling

Structuring Node.js projects into controllers and routes

Writing clean and professional documentation

🧑‍💻 Author

Paul Yusuf
Backend Developer | Cybersecurity Enthusiast
🔗 [GitHub](https://github.com/PaulsCreate/) | 🔗 [LinkedIn](https://www.linkedin.com/in/paul-yusuf-8b5a97209/)
