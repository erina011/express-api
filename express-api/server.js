// server.js
const express = require('express');
const cors = require('cors');
const expenseTypeRoutes = require('./routes/expenseType');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON body

// API Route
app.use('/api/expenses/types/v1', expenseTypeRoutes);

// Handle unmatched routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// Catch-all 404 route
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});
