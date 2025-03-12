const Attendance = require('../models/Attendance');

exports.checkIn = async (req, res) => {
  try {
    const { checkInTime } = req.body;
    const employeeId = req.user.id;
    
    if (!checkInTime) {
      return res.status(400).json({ message: 'Check-in time is required' });
    }
    
    const attendance = new Attendance({ employeeId, checkInTime });
    await attendance.save();
    
    res.status(201).json({ message: 'Check-in successful', attendance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.checkOut = async (req, res) => {
  try {
    const { checkOutTime } = req.body;
    const employeeId = req.user.id;
    
    if (!checkOutTime) {
      return res.status(400).json({ message: 'Check-out time is required' });
    }
    
    const attendance = await Attendance.findOne({ employeeId, checkOutTime: null });
    if (!attendance) return res.status(400).json({ message: 'No active check-in found' });
    
    attendance.checkOutTime = checkOutTime;
    await attendance.save();
    
    res.status(200).json({ message: 'Check-out successful', attendance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAttendance = async (req, res) => {
  try {
    const records = await Attendance.find({ employeeId: req.user.id }).populate('employeeId', 'name email');
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};