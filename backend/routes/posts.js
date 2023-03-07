const express = require('express');
const { addPost } = require('../controllers/post');

const router = express.Router();

router.get('/', (req, res)=> {
  addPost(req, res);  
});

module.exports = router;