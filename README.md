
# Auth Service

The **Auth Service** is a core microservice. It handles user authentication through **JWT tokens**, enabling secure access across the system.

---

## 🧩 Features

- User registration (`/api/register`)
- User login (`/api/login`)
- Input validation and sanitization using `express-validator`
- Password hashing with `bcrypt`
- JWT-based authentication
- Prisma ORM for PostgreSQL

---

## 🏗️ Tech Stack

- **Node.js** (Express)
- **Prisma ORM**
- **PostgreSQL**
- **express-validator**
- **JWT (jsonwebtoken)**
- **bcrypt**

---

## 📁 Folder Structure

```
auth-service/
│
├── prisma/                 # Prisma schema and migrations
│   └── schema.prisma
│
├── src/
│   ├── controllers/        # Business logic
│   │   └── authController.js
│   ├── routes/             # Route definitions
│   │   └── authRoutes.js
│   ├── middleware/         # Middlewares like validator
│   │   ├── validateInput.js
│   │   └── sanitize.js
│   ├── utils/              # Utility functions (JWT, password hashing)
│   │   └── jwt.js
│   ├── prisma/             # Prisma client (generated in src)
│   └── index.js            # Entry point
│
├── .env                    # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
DATABASE_URL=postgresql://user:password@localhost:5432/authdb
JWT_SECRET=your_jwt_secret_key
PORT=8000
```

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/auth-service.git
cd auth-service

# 2. Install dependencies
npm install

# 3. Generate Prisma client
npx prisma generate

# 4. Run DB migration (if applicable)
npx prisma migrate dev --name init

# 5. Start the service
npm start
```

---

## 🚀 API Endpoints

### `POST /api/register`
Register a new user.

**Body**:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### `POST /api/login`
Login an existing user.

**Body**:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response**:
```json
{
  "token": "jwt_token_here"
}

