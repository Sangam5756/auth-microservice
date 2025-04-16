require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./controller/auth.controller');

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', router);

// Health check (optional)
app.get('/', (req, res) => {
  res.send('Auth service is running 🚀');
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Auth service running on http://localhost:${PORT}`);
});
