const express = require('express');
const router = express.Router();

let expenseTypes = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Transaction' },
    { id: 3, name: 'Utilities' },
    { id: 4, name: 'Transportation' },
];


router.get('/', (req, res) => {
    res.status(200).json(expenseTypes);
});


router.post('/create', (req, res) => {
    const { name } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ error: name });
    }
    res.status(200).json(newType);
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const expenseType = expenseTypes.find(type => type.id === parseInt(id));
    if (!expenseType) {
        return res.status(404).json({ error: 'Expense type not found' });
    }

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required' });
    }

    expenseType.name = name.trim();
    res.status(200).json(expenseType);
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = expenseTypes.findIndex(type => type.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Expense type not found' });
    }

    const deleted = expenseTypes.splice(index, 1);
    res.status(200).json({ message: 'Deleted Successfully!', deleted: deleted[0] });
});

module.exports = router;
