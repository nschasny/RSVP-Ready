const express = require('express');
const { createEvent, getAllEvents } = require('../controllers/eventController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createEvent);
router.get('/', authMiddleware, getAllEvents);

module.exports = router;