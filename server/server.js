const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Parse incoming URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

// Sync database and start server
db.sequelize.sync().then(() => {
  if (require.main === module) {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  }
});

module.exports = app;
