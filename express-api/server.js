const express = require('express');
const cors = require('cors');
const expenseTypeRoutes = require('./routes/expenseType');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());



app.use((req, res) => {
    res.status(404).type('application/json').json({ error: 'Route not found' });
});


app.listen(3001, () => {
  console.log("Server running on port 3001");
});
