const { Router } = require('express');
const router = Router();

const {
   searchVerbs
} = require('../controllers/index.controllers');

router.get('/listVerbs', searchVerbs);

module.exports = router;