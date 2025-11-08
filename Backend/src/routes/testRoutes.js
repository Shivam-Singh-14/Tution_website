const express = require('express');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

// Simple test route (any logged-in user)
router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'Access granted',
    user: req.user
  });
});

// Only admins can access
router.get('/admin-only', protect, authorizeRoles('admin'), (req, res) => {
  res.json({
    message: 'Welcome Admin!',
    user: req.user
  });
});

module.exports = router;
