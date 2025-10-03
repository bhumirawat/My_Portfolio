import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './route/contactRoute.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);

// Database connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/contactdb';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  })
  .catch((err) => {
    console.error("❌ MONGO connection error:", err.message);
  });

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Contact API Server is running!',
    endpoints: {
      submitContact: 'POST /api/contact',
      getAllContacts: 'GET /api/contact',
      getContact: 'GET /api/contact/:id',
      deleteContact: 'DELETE /api/contact/:id'
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error.message);
  res.status(500).json({ 
    success: false,
    message: 'Internal server error'
  });
});

// Export app for Vercel serverless function
export default app;
