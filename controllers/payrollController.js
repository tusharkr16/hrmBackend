const Payroll = require('../models/Payroll');
const Attendance = require('../models/Attendance');
const Client = require('../models/Client');


exports.generatePayroll = async (req, res) => {
  try {
    const { employeeId, baseSalary, month, year } = req.body;

    
    const totalDays = new Date(year, month, 0).getDate();

    
    const presentDays = await Attendance.countDocuments({
      employeeId,
      checkInTime: { $ne: null },
      checkOutTime: { $ne: null }
    });

   
    const salary = (baseSalary / totalDays) * presentDays;

    
    const payroll = new Payroll({
      employeeId,
      baseSalary,
      month,
      year,
      totalDays,
      presentDays,
      salary
    });

    await payroll.save();
    res.status(201).json({ message: 'Payroll generated successfully', payroll });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPayrolls = async (req, res) => {
  try {
    const payrolls = await Payroll.find().populate('employeeId', 'name email');
    res.status(200).json(payrolls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getEmployeePayroll = async (req, res) => {
  try {
    const employeeId = req.user.id;
    const payrolls = await Payroll.find({ employeeId });

    res.status(200).json(payrolls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
