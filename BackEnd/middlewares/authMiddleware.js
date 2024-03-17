// authMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('../config/config'); // Assuming you have a configuration file

// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify the token
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    // If token is valid, save decoded token to request object
    req.decoded = decoded;
    next();
  });
};

// Middleware to check if user is admin
exports.isAdmin = (req, res, next) => {
  // Check if user role is admin
  if (req.decoded && req.decoded.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Requires admin privileges' });
  }
};
