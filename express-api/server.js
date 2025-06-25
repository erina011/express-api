const express = require('express');
const app = express();
const expenseTypeRoutes = require('./routes/expenseTypes'); // adjust path if needed

app.use(express.json()); // VERY IMPORTANT
app.use('/api/expenses', expenseTypeRoutes); // Your mounted route

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

