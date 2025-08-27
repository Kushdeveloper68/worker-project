# Worker Manager Project 👷‍♂️

A **full-stack worker management system** built with **React (Vite)**, **Node.js**, and **MongoDB**. This project allows organizations or individuals to manage workers efficiently with features like **email OTP-based signup**, worker records management, and future capabilities like **profile images** and **filtering by date/profession**.

## 🚀 Tech Stack

- **Frontend**: React (Vite) + React Router DOM
- **Backend**: Node.js + Express + MongoDB
- **Email Service**: Nodemailer (for OTP authentication & notifications)
- **Other Tools**: CORS, dotenv, API handling

## 🔗 Live Demo
---
👉 [Check Live Demo Here](https://worker-manager.onrender.com) 
---
## 📂 Project Structure

```text
worker-project/
│── backend/              # Node.js + Express backend
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── controllers/      # Logic for routes
│   ├── utils/            # Helper functions (OTP, email, etc.)
│   ├── server.js         # Entry point for backend
│   └── .env              # Environment variables (not included)
│
│── vite-project/         # React frontend (Vite)
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # App pages (Login, Signup, Dashboard, etc.)
│   │   ├── services/     # API handling
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
│
└── README.md
```
# ⚙️ Setup & Installation

***1. Clone the repository***

```
git clone https://github.com/Kushdeveloper68/worker-project.git
cd worker-project
```

***2. Setup Backend***

```
cd backend
npm install
```
<p color="red"> Create your .env file in the backend/ folder:</p>

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```
***Run backend:***

```
npm start
```
***3. Setup Frontend***

```
cd ../vite-project
npm install
npm run dev
```
# 🔑 Features

✅ User Signup with Email + OTP Verification

✅ Add and Manage Workers

✅ Secure Authentication

✅ API Integration (React ↔ Node)

✅ Modern UI with React Router DOM


***📖 Usage Guide****

**➤ Signup / Login**

Enter your email & details.

Verify your account using OTP sent to email.

Login with verified credentials.


**➤ Add Workers**

Navigate to Dashboard → Add Worker.

Enter worker details (name, profession, date, etc.).


**➤ View & Manage Workers**

Workers can be listed, updated, or removed.

(Upcoming: filter by date or profession).


**📝 Feedback & Reporting**

Found a bug? Have a feature request?

Issues: Open an issue in the GitHub Issues section.

Feedback: Feel free to suggest features via Pull Requests or Discussions.


***🔮 Future Enhancements***

📸 Profile Image Upload for Workers

📅 Check Workers by Date

🛠️ Filter Workers by Profession

📊 Analytics & Dashboard


# 🤝 Contributing

1. Fork the repository


2. Create your feature branch:
```
git checkout -b feature-name
```

3. Commit your changes:

```
git commit -m "Added new feature"

```
4. Push the branch and open a Pull Request



<h1>👨‍💻 Author</h1>

***Kushdeveloper68***
Passionate about building scalable full-stack solutions 🚀



