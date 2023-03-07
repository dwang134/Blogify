const express = require('express');
const {register, login, logout} = require('../controllers/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// router.get('/', (req, res)=> {
//     getAuth(req, res);
// })

module.exports = router;