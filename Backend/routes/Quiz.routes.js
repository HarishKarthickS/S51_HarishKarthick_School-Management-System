const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz'); // Replace with your path to the Quiz model

// Get all quizzes
router.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate('createdBy', 'username'); // Include username from User
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific quiz by ID
router.get('/quizzes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const quiz = await Quiz.findById(id).populate('createdBy', 'username').populate('questions'); // Include username and questions
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new quiz (assuming a logged-in user with req.user)
router.post('/quizzes', async (req, res) => {
  const { title, description, duration, questions } = req.body;
  const newQuiz = new Quiz({
    title,
    description,
    duration,
    questions,
    createdBy: req.user._id // Assuming user ID is stored in req.user
  });
  try {
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle validation errors etc.
  }
});

// Update a quiz (assuming authorization for updates)
router.put('/quizzes/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, duration, questions } = req.body;

  // You can implement authorization logic here to check if the user can update the quiz

  const updates = { title, description, duration, questions };
  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedQuiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json(updatedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle validation errors etc.
  }
});

// Delete a quiz (assuming authorization for deletion)
router.delete('/quizzes/:id', async (req, res) => {
  const { id } = req.params;

  // You can implement authorization logic here to check if the user can delete the quiz

  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(id);
    if (!deletedQuiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json({ message: 'Quiz deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
