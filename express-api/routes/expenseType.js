// routes/expenseType.js
const express = require('express');
const router = express.Router();

let expenseTypes = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Transaction' },
    { id: 3, name: 'Utilities' },
];

// GET all expense types
router.get('/', (req, res) => {
    res.json(expenseTypes);
});

module.exports = router;
