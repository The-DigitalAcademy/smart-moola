const express = require('express');
const router = express.Router();
const IndebtQController = require('../controllers/IndebtQ.controller'); // Adjust the path as needed

// Route to create a new IndebtQ entry
router.post('/IndebtQ', IndebtQController.createIndebtQ);

// Route to retrieve all IndebtQ entries
router.get('/getAll', IndebtQController.getAllIndebtQ);

// Add more routes as needed for updating, deleting, or querying specific entries

module.exports = router;
