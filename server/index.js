const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const sareesRouter = require('./routes/sarees');
const app = express();

const mongoDB = require("./db")
mongoDB();

// Load environment variables
dotenv.config();

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })  

// Middleware
app.use(cors());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json()); // Parse incoming JSON requests
app.use(express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// Routes
app.use('/api/sarees', sareesRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));