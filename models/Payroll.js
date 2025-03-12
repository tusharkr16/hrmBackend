const mongoose = require('mongoose');

const PayrollSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  month: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  baseSalary: {
    type: Number,
    required: true
  },
  totalDays: {
    type: Number,
    required: true
  },
  presentDays: {
    type: Number,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Payroll', PayrollSchema);
