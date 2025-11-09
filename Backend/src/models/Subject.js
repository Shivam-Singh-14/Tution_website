const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rollNumber: { type: String, unique: true, required: true },
  className: { type: String, required: true },
  section: { type: String },
  admissionDate: { type: Date, default: Date.now },
  feesPaid: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
