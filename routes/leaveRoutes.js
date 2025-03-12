const express = require('express');
const router = express.Router();
const { applyLeave, getEmployeeLeaves, getAllLeaves, updateLeaveStatus } = require('../controllers/leaveController.js');
const { protect, isHR } = require('../middlewares/authMiddleware.js');

router.post('/apply', protect, applyLeave);
router.get('/my-leaves', protect, getEmployeeLeaves);
router.get('/all', protect, isHR, getAllLeaves);
router.put('/update', protect, isHR, updateLeaveStatus);

module.exports = router; 