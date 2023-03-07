const express = require('express');
const { getUser } = require('../controllers/user');

const router = express.Router();

router.get('/', (req, res)=> {
    getUser(req, res);
});

module.exports = router;