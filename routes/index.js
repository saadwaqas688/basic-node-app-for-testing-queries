const express = require('express');
const router = express.Router();
const testRoutes = require('../controllers/get-test');

// Define routes
router.get('/', testRoutes.getTest);

router.post('/', testRoutes.postTest);


module.exports = router;
