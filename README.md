# SaaS Chatbot Application

## Project Overview
This SaaS Chatbot application consists of a frontend React app and a backend Express API server. The app provides user authentication, chat functionality, and a responsive user interface.

## Frontend

### Tech Stack
- React with TypeScript
- React Router for client-side routing
- Material UI for theming and UI components
- Axios for API communication
- react-hot-toast for notifications
- Context API for authentication state management

### Main Features
- Routing to pages: Home, Login, Signup, Chat, and Not Found
- Authentication context to manage user login state
- Theming with Material UI's ThemeProvider
- API calls to backend for user authentication and chat data
- Notification system for user feedback

## Backend

### Tech Stack
- Node.js with Express framework
- MongoDB (implied by Mongoose usage in user model)
- Middleware: CORS, cookie-parser, morgan for logging
- JWT tokens for authentication
- Bcrypt for password hashing

### Main Features
- Modular routing with Express Router
- User management API:
  - Register new users with hashed passwords
  - Login users with password validation
  - Delete users by ID
- Authentication using signed HTTP-only cookies with JWT tokens
- CORS configured to allow requests from frontend origin

## How to Run

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set environment variables in a `.env` file (e.g., `COOKIE_SECRET`, `NODE_ENV`).
4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set environment variables in `.env` or use defaults (e.g., `VITE_API_URL`).
4. Start the frontend development server:
   ```
   npm run dev
   ```

## API Endpoints Summary

- `GET /api/users` - Retrieve all users
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `DELETE /api/users/:id` - Delete a user by ID

## Additional Notes

- Environment variables control sensitive data like cookie secrets and API URLs.
- Cookies are HTTP-only, signed, and secure in production.
- CORS is configured to allow requests from the frontend origin (`http://localhost:5173`).
- Axios is configured on the frontend to send credentials (cookies) with requests.

---

This documentation provides an overview of the SaaS Chatbot application's architecture, technologies, and usage instructions.
