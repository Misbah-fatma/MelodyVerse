const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('./middleware/rate_limiter');
const authRoutes = require('./routes/authRoute');
const userRoutes = require('./routes/userRoute');

const app = express();

// Middleware
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type', 'Authorization'] }));
app.use(morgan('combined'));
app.use(express.json());
app.use(xss());
app.use(rateLimiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Server Start
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
