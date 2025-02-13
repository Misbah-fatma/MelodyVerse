
# MelodyVerse App

This project is a full-stack web application for user authentication, built using React.js for the frontend and Node.js with Express for the backend. It features secure login and signup functionality using JWT (JSON Web Tokens) and follows best practices for web development.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Best Practices Implemented](#best-practices-implemented)
- [Bonus Features](#bonus-features)
- [Future Improvements](#future-improvements)

## Project Overview

The MelodyVerse Authentication System allows users to register and log in to a fictional music streaming service called "MelodyVerse." The application demonstrates user authentication using JWTs and includes features such as form validation, responsive design, and secure password handling.

## Features

- **User Registration (Signup):** Allows users to create an account with a username, email, and password.
- **User Login:** Authenticates users with their username or email and password, returning a JWT for session management.
- **JWT Authentication:** Secures routes and ensures that only authenticated users can access certain parts of the application.
- **Password Hashing:** Securely stores passwords using bcrypt.
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices.
- **Remember Me:** Option to remember users across sessions using local storage or cookies.
- **Forgot Password:** Basic link for password recovery.
- **Form Validation:** Ensures valid input for user registration and login.

## Technology Stack

**Frontend:**

- React.js
- Tailwind CSS for styling
- React Router for navigation
- React Hooks and Context API for state management

**Backend:**

- Node.js
- Express.js
- MongoDB
- JSON Web Token (JWT) for authentication
- bcrypt for password hashing

## Installation

### Backend:

```bash
cd connectverse-backend
npm i
npm run start
```

### Frontend:

```bash
cd melodyverse-frontend
cd melodyverse
npm i
npm run start
```

- The backend server runs on port `4000`.
- The frontend server runs on port `3000`.

## Usage

- **Signup:** Register a new user by providing a username, email, and password.
- **Login:** Authenticate with your credentials to receive a JWT token.
- **Remember Me:** Optionally, use the "Remember Me" checkbox to stay logged in across sessions.
- **Forgot Password:** Click the "Forgot Password" link to navigate to the password recovery page (not fully implemented).

User Authentication and Password Reset System
This repository implements a user authentication system with the following features:

User Registration (Signup)
User Login
Password Reset (Forgot Password)
The system uses MongoDB as the database, bcrypt for password hashing, JWT for authentication, and crypto for generating secure password reset tokens. Nodemailer is used to send password reset emails.

Technologies Used
Node.js and Express.js for the backend.
MongoDB as the database.
bcrypt for password hashing.
jsonwebtoken (JWT) for token-based authentication.
crypto for generating secure reset tokens.
Nodemailer for sending password reset emails.
Features
User Signup: Register users with a username, email, and password. The password is hashed using bcrypt before storage.
User Login: Users can log in with their email and password. A JWT access token and refresh token are issued upon successful authentication.
Password Reset:
Forgot Password: Users can request a password reset. A reset token is generated and sent via email.
Reset Password: Users can reset their password by providing the reset token.
Getting Started
Installation
Clone the repository:

bash
Copy
Edit
git clone <repository-url>
cd <project-folder>
Install dependencies: Make sure you have Node.js and npm installed, then run:

bash
Copy
Edit
npm install
Set up MongoDB: Ensure you have MongoDB running locally or use MongoDB Atlas. Update the MongoDB connection URL in db/mongo_connect.js.

Set up environment variables: Create a .env file in the project root with the following content:

JWT_SECRET: Secret key used for JWT signing.
JWT_REFRESH_SECRET: Secret key used for refresh token signing.
Start the server:

bash
Copy
Edit
npm start
The server will be accessible at http://localhost:3000.

API Endpoints
1. Signup (User Registration)
POST /signup
Accepts username, email, and password.
Returns access token and refresh token.
2. Login
POST /login
Accepts email and password.
Returns access token and refresh token.
3. Renew Access Token
POST /renew-access-token
Accepts refresh token.
Returns a new access token.
4. Forgot Password (Generate Reset Token)
POST /forgot-password
Accepts email.
Sends a reset token to the provided email.
5. Reset Password
PUT /reset-password/:token
Accepts new password.
Resets the password using the provided reset token.
How It Works
User Registration (Signup)
When a user registers, their password is hashed with bcrypt before being stored in MongoDB.
JWT tokens are issued to maintain secure sessions for the user.
User Login
Users authenticate by providing their email and password.
The password is validated using bcrypt and a new set of JWT tokens are issued upon successful login.
Password Reset Process
Forgot Password
The user requests a password reset. A secure reset token is generated and sent to the user’s email.
The token expires after 10 minutes.
Reset Password
The user clicks the reset link sent to their email and provides a new password.
The reset token is verified, and the new password is saved in the database after being hashed.
Notes
JWT Expiry: Access tokens expire after 1 hour.
Password Reset Token Expiry: The reset token is valid for 10 minutes.
Email Sending: Ensure Nodemailer is correctly configured in utils/sendEmail.js for email functionality.


## Best Practices Implemented

- **Input Validation & Sanitization:** All inputs are validated and sanitized to prevent vulnerabilities.
- **Password Security:** Passwords are hashed using bcrypt before storing in the database.
- **Error Handling:** Proper error handling is implemented with informative error messages.
- **Environment Variables:** Sensitive information is stored in environment variables.

## Bonus Features

- Added rate limiting to protect against brute force attacks.
- Used middleware for authentication and authorization.
- Added password visibility toggle.
- Implemented robust token refresh mechanisms.


