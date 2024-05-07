const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  // User credentials (optional, consider separate model for security)
  email: { type: String, required: true, unique: true },
  password: { type: String, required: optional }, // Make password optional
  // Demographics
  dateOfBirth: { type: Date },
  // Academic information
  gradeLevel: { type: Number },
  major: { type: String },
  coursesEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }], // Reference to a Course model
  // Additional details
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
  },
  phone: { type: String },
  learningStyle: { type: String }, // (e.g., visual, auditory, kinesthetic)
  // Track student progress
  grades: [{
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }, // Reference to Course model
    grade: { type: String }, // (e.g., A, B, C)
  }],
}, {
  timestamps: true
});

module.exports = mongoose.model('Students', StudentSchema);
