React and Node.js User Authentication System
This project implements a User Authentication System with login, signup, and password reset functionality using React for the frontend and Node.js (Express) for the backend. The backend also integrates with MongoDB for persistent storage.

Features
Signup: Allows users to register with their username, email, and password.
Login: Allows users to log in with email and password.
Forgot Password: Allows users to request a password reset link via email.
Reset Password: Allows users to reset their password using a token sent via email.
Technologies Used
Backend
Node.js (Express) for the server.
MongoDB for database storage.
bcrypt for password hashing.
jsonwebtoken (JWT) for authentication.
crypto for secure token generation (password reset).
Nodemailer for email functionality.
Frontend
React.js for the user interface.
Axios for making HTTP requests to the backend.
styled-components for styling.
React Context API/Redux for state management.
Running the Application
Backend Setup
Clone the repository:

bash
Copy
Edit
git clone <repository-url>
cd <project-folder>
Install dependencies:

bash
Copy
Edit
npm install
Set up MongoDB: Make sure you have a running MongoDB instance locally or use MongoDB Atlas. Update the MongoDB URI in db/mongo_connect.js to connect your backend with the database.

Environment Variables: Create a .env file in the project root with the following environment variables:

JWT_SECRET: A secret key used for signing JWT tokens.
JWT_REFRESH_SECRET: A secret key used for signing refresh tokens.
EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS: Set up email credentials for Nodemailer.
Start the server:

bash
Copy
Edit
npm start
The backend server will run on http://localhost:3000.

Frontend Setup
Clone the repository (if not already done):

bash
Copy
Edit
git clone <repository-url>
cd <frontend-folder>
Install dependencies:

bash
Copy
Edit
npm install
Run the frontend application:

bash
Copy
Edit
npm start
The frontend React app will run on http://localhost:3001.

API Endpoints
1. User Signup
POST /signup
Request Body:
json
Copy
Edit
{
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "password123"
}
Response:
json
Copy
Edit
{
  "message": "User created successfully",
  "accessToken": "<access_token>",
  "refreshToken": "<refresh_token>"
}
2. User Login
POST /login
Request Body:
json
Copy
Edit
{
  "email": "user@example.com",
  "password": "password123"
}
Response:
json
Copy
Edit
{
  "message": "Login successful",
  "accessToken": "<access_token>",
  "refreshToken": "<refresh_token>"
}
3. Forgot Password (Generate Reset Token)
POST /forgot-password
Request Body:
json
Copy
Edit
{
  "email": "user@example.com"
}
Response:
json
Copy
Edit
{
  "message": "Password reset email sent"
}
4. Reset Password
PUT /reset-password/:token
Request Body:
json
Copy
Edit
{
  "password": "newpassword123"
}
Response:
json
Copy
Edit
{
  "message": "Password reset successful"
}
Error Handling and Edge Cases
Error Handling in the Backend:
Bad Request (e.g., missing or invalid data):

Status Code: 400
Example Response:
json
Copy
Edit
{
  "error": "Invalid credentials"
}
Unauthorized Access (e.g., invalid or expired token):

Status Code: 401
Example Response:
json
Copy
Edit
{
  "error": "Authentication failed"
}
Not Found (e.g., user not found):

Status Code: 404
Example Response:
json
Copy
Edit
{
  "error": "User not found"
}
Internal Server Error:

Status Code: 500
Example Response:
json
Copy
Edit
{
  "error": "Server Error"
}
Error Handling in the Frontend:
Display appropriate error messages when any API request fails.
Provide feedback for invalid input (e.g., empty fields, invalid email format).
Handle expired sessions or unauthorized access and prompt the user to log in again.
Testing the API
Manual Testing
Test Signup and Login by sending HTTP requests to /signup and /login with sample data using tools like Postman or Insomnia.
Test Password Reset by sending a POST request to /forgot-password and then a PUT request to /reset-password/:token with a new password.
Automated Testing
You can write tests using Jest or Mocha to automate API testing. Make sure to cover edge cases, such as:

Invalid email format.
Passwords that don’t meet strength requirements.
Expired reset tokens.
Missing request body fields.
Frontend (React.js)
Components:
SignupPage: Displays a form for users to register.
LoginPage: Displays a form for users to log in.
ForgotPasswordPage: Displays a form for users to request a password reset.
ResetPasswordPage: Displays a form for users to reset their password after clicking the reset link.
State Management:
React Context API: Used for storing authentication tokens and user data across the application.
Styled-components: Used for styling components dynamically.
Example:
After a user logs in, their JWT access token is stored in the local storage and used for making authenticated requests.
Notes
Environment Variables: Keep sensitive keys (like JWT secrets and email credentials) in a .env file to prevent them from being exposed.
Email Service: For email to work, configure Nodemailer properly and test with a valid SMTP provider.