require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/auth.routes');


app.use(express.json());


app.use('/api/auth', router);


app.get('/', (req, res) => {
    res.send('Auth service is running 🚀');
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`✅ Auth service running on http://localhost:${PORT}`);
});
