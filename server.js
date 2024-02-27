
// server.js
const express = require('express');
const sequelize = require('./database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Sync the Model with the Database
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
});

// Use Task Routes
app.use('/api', taskRoutes);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
