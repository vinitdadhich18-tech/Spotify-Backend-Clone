# 🎵 Spotify Backend Clone

A RESTful backend API inspired by Spotify, built using Node.js, Express.js, MongoDB, and ImageKit.

The project provides user authentication, authorization, music uploads, album creation, and protected APIs for accessing music and albums.

## 🚀 Features

- User Registration and Login
- JWT-based Authentication
- Cookie-based token handling
- Role-based authorization for users and artists
- Music upload functionality
- Album creation
- Get all music
- Get all albums
- Get album by ID
- File upload handling using Multer
- File storage using ImageKit

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- Multer
- ImageKit
- cookie-parser
- dotenv

## 📂 Project Structure

```text
Spotify-Backend-Clone/
│
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── music.model.js
│   │   └── album.model.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   └── music.route.js
│   │
│   ├── services/
│   │   └── storage.service.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md