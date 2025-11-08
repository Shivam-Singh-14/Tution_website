// src/routes/userRoutes.js
const express = require('express');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

const router = express.Router();

// Admin-only routes
router.get('/', protect, authorizeRoles('admin'), userController.getAllUsers);
router.get('/:id', protect, authorizeRoles('admin'), userController.getUserById);
router.post('/', protect, authorizeRoles('admin'), userController.createUser);
router.put('/:id', protect, authorizeRoles('admin'), userController.updateUser);
router.delete('/:id', protect, authorizeRoles('admin'), userController.deleteUser);

module.exports = router;
