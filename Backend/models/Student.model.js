const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  // Add other student related fields here
  // Example:
  email: { type: String, required: true, unique: true },
  gradeLevel: { type: Number },
  // You can also add arrays for storing grades or courses
}, {
  timestamps: true
});

module.exports = mongoose.model('Students', StudentSchema);
