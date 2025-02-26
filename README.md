# Task Management API

A **RESTful Task Management API** build with **Node.js, Express, and MongoDB**, with efficient user authentication, task management and role based access control.

This API allows users to **register, authenticate, create, update, and delete tasks** with **JWT-based authentication and authorization**. It features **custom error handling, middleware validation, and MongoDB integration with Mongoose**.

## Features

- **User Authentication** (Register and Login)
- **JWT-based Authentication and Authorization**
- **CRUD Oprations for Tasks**
- **Role-based Access Control**
- **Middleware Validation with \`express-validator\`**
- **Custom Error Handling with Custom Errors**
- **MongoDB with Mongoose**

---

## Installation & Setup

### **1. Clone the Repository**

```sh
git clone https://github.com/ritikxsharma/Floww_TODO.git
```

```sh
cd Floww_TODO
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Configure Environment Variables**

Create a \`.env\` file in the root directory and add:

```ini
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

### **4. Start the Server**

```sh
npm start
```

Server will run on http://localhost:5000

---
