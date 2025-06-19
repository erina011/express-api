// server.js
const express = require('express');
const cors = require('cors');
const expenseTypeRoutes = require('./routes/expenseType'); // ✅ Make sure path and name match

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Mount routes
app.use('/api/expenses/types/v1', expenseTypeRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
