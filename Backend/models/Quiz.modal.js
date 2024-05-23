const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100
  },
  description: {
    type: String,
    trim: true,
  },
  duration: {
    type: Number,
    min: 1, // Minimum duration of 1 minute
    default: 30  // Default duration of 30 minutes
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Add a pre-save hook to ensure questions exist before saving the quiz
QuizSchema.pre('save', async function(next) {
  const quiz = this;
  if (quiz.questions.length === 0) {
    throw new Error('Quiz must have at least one question');
  }
  next();
});

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;
