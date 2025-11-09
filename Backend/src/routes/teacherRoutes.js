const express = require('express');
const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/authMiddleware');
const teacherController = require('../controllers/teacherController');

// Create a new teacher (Admin only)
router.post(
  '/',
  protect,
  authorizeRoles('admin'),
  teacherController.createTeacher
);

// Get all teachers (Admin only)
router.get(
  '/',
  protect,
  authorizeRoles('admin'),
  teacherController.getAllTeachers
);

module.exports = router;
