const express = require('express');
const router = express.Router();

let expenseTypes = [
    { id: 1, code: 'FOOD', description: 'Daily meals and snacks' },
    { id: 2, code: 'TRXN', description: 'Bank or online transactions' },
    { id: 3, code: 'UTIL', description: 'Electricity, water, and internet bills' },
    { id: 4, code: 'TRANS', description: 'Transport fare and fuel' },
];

router.get('/', (req, res) => {
    res.status(200).json(expenseTypes);
});

router.post('/create', (req, res) => {
    const { code, description } = req.body;

    if (!code || !description || code.trim() === '' || description.trim() === '') {
        return res.status(400).json({ error: 'Code and description are required' });
    }

    const newType = {
        id: expenseTypes.length ? expenseTypes[expenseTypes.length - 1].id + 1 : 1,
        code: code.trim(),
        description: description.trim()
    };

    expenseTypes.push(newType);
    res.status(200).json({ message: 'Created Successfully!', data: newType });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { code, description } = req.body;

    const expenseType = expenseTypes.find(type => type.id === parseInt(id));
    if (!expenseType) {
        return res.status(404).json({ error: 'Expense type not found', message: 'Update Failed' });
    }

    if (!code || !description || code.trim() === '' || description.trim() === '') {
        return res.status(400).json({ error: 'Code and description are required' });
    }

    expenseType.code = code.trim();
    expenseType.description = description.trim();
    res.status(200).json({ message: 'Updated Successfully!', data: expenseType });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = expenseTypes.findIndex(type => type.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Expense type not found', message: 'Nothing to delete' });
    }

    expenseTypes.splice(index, 1);
    res.status(200).json({ message: 'Deleted Successfully!' });
});

module.exports = router;
