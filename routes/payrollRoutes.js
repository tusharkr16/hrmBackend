const express = require('express');
const router = express.Router();
const { generatePayroll, getAllPayrolls, getEmployeePayroll } = require('../controllers/payrollController.js');
const { protect, isHR } = require('../middlewares/authMiddleware.js');


router.post('/generate', protect, isHR, generatePayroll);


router.get('/all', protect, isHR, getAllPayrolls);


router.get('/my-payroll', protect, getEmployeePayroll);

module.exports = router;
