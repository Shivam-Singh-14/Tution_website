const User = require('../models/User');
const bcrypt = require('bcryptjs');

// @desc Create a new teacher (Admin only)
exports.createTeacher = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if teacher already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Teacher with this email already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create teacher
    const teacher = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'teacher'
    });

    res.status(201).json({
      message: 'Teacher created successfully',
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        role: teacher.role
      }
    });
  } catch (error) {
    console.error('Error creating teacher:', error.message);
    res.status(500).json({ message: 'Server error while creating teacher' });
  }
};

// @desc Get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ role: 'teacher' }).select('-password');
    res.status(200).json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error.message);
    res.status(500).json({ message: 'Server error while fetching teachers' });
  }
};
