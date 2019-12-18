const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.all((data) => {
        res.render('index', { burger: data })
    })
});

router.post('/api/burger', (req, res) => {
    burger.insert(req.body.name, (data) => {
        res.render('index', { burger: data })
    })
});

router.put('/api/:id', (req, res) => {
    burger.update(req.params.id, (data) => {
        res.render('index', { burger: data })
    })
});

module.exports = router