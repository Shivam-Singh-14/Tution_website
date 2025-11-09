const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  qualification: { type: String },
  salary: { type: Number, default: 0 },
  joinDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);
