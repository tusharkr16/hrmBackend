const Leave = require('../models/Leave.js');


exports.applyLeave = async (req, res) => {
  try {
    const { startDate, endDate, reason } = req.body;
    const employeeId = req.user.id; 

    const leave = new Leave({
      employeeId,
      startDate,
      endDate,
      reason
    });

    await leave.save();
    res.status(201).json({ message: 'Leave applied successfully', leave });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEmployeeLeaves = async (req, res) => {
  try {
    const employeeId = req.user.id; 
    const leaves = await Leave.find({ employeeId });
    res.status(200).json(leaves);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllLeaves = async (req, res) => {
  try {
    if (req.user.role !== 'HR') {
      return res.status(403).json({ message: 'Access denied. Only HR can view all leave requests.' });
    }

    const leaves = await Leave.find().populate('employeeId', 'name email');
    res.status(200).json(leaves);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateLeaveStatus = async (req, res) => {
  try {
    if (req.user.role !== 'HR') {
      return res.status(403).json({ message: 'Access denied. Only HR can update leave status.' });
    }

    const { leaveId, status } = req.body;

    if (!['Approved', 'Rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status. Choose Approved or Rejected' });
    }

    const leave = await Leave.findById(leaveId);
    if (!leave) return res.status(404).json({ message: 'Leave request not found' });

    leave.status = status;
    await leave.save();

    res.status(200).json({ message: `Leave ${status.toLowerCase()} successfully`, leave });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
