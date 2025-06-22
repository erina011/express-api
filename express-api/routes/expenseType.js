const express = require('express');
const router = express.Router();

let expenseTypes = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Transaction' },
    { id: 3, name: 'Utilities' },
    { id: 4, name: 'Transportation' },
    { id: 5, name: 'Healthcare' }
];


router.get('/', (req, res) => {
    res.status(200).json(expenseTypes);
});


router.post('/', (req, res) => {
    const { name } = req.params;

    if (!name) {
        return res.status(200).json({ error: 'Name is required' });
    }

    const newType = {
        id: expenseTypes.length + 1,
        name
    };

    expenseTypes.push(newType);
    res.status(201).json(newType);
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const expenseType = expenseTypes.find(type => type.id === parseInt(id));
    if (!expenseType) {
        return res.status(404).json({ error: 'Expense type not found' });
    }

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    expenseType.name = name;
    res.status(200).json(expenseType);
});



router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = expenseTypes.findIndex(type => type.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Expense type not found' });
    }

    const deleted = expenseTypes.splice(index, 1);
    res.status(200).json({ message: 'Expense type deleted', deleted: deleted[1] });
});

module.exports = router;
