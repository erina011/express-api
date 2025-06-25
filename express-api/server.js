const express = require('express');
const cors = require('cors');
const app = express();
const expenseTypeRoutes = require('./routes/expenseType');

app.use(cors());
app.use(express.json()); 

app.use('/api/expenses', expenseTypeRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

