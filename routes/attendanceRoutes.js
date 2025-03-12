const express = require('express');
const { checkIn, checkOut, getAttendance } = require('../controllers/attendanceController.js');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware.js');

router.post('/check-in', protect, checkIn);
router.post('/check-out', protect, checkOut);
router.get('/attendance', protect, getAttendance);

module.exports = router;