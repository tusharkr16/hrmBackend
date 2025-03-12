const jwt = require('jsonwebtoken');
const User = require('../models/Client.js');

exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  console.log(token,"@@@@@@@@@")
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token,"tusharkumar9871");
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Not authorized for this action' });
    }
    next();
  };
};


exports.isHR = (req, res, next) => {
    if (req.user.role !== 'HR') {
      return res.status(403).json({ message: 'Access denied. Only HR can perform this action.' });
    }
    next();
  };