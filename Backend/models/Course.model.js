const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
  },
  duration: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider', 
  },
  price: {
    type: Number,
  },
  currency: {
    type: String,
    default: 'INR'
  },
  lessons: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Lesson',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
