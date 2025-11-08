const express = require('express');
const { body } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');
const authController = require('../controllers/authController');

const router = express.Router();

router.post(
  '/signup',
  [
    body('name').notEmpty().withMessage('Name required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars')
  ],
  validateRequest,
  authController.signup
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').exists().withMessage('Password required')
  ],
  validateRequest,
  authController.login
);

module.exports = router;
