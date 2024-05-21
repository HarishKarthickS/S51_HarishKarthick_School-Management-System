const express = require('express');
const router = express.Router();
const Course = require('../models/Course'); // Assuming Course model is in '../models/Course'

// Get all courses (GET request to '/courses')
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific course by ID (GET request to '/courses/:id')
router.get('/courses/:id', getCourse, async (req, res) => {
  res.json(res.course);
});

// Middleware function to get a course by ID (reusable)
async function getCourse(req, res, next) {
  let course;
  try {
    course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.course = course;
  next();
}

// Create a new course (POST request to '/courses')
router.post('/courses', async (req, res) => {
  const course = new Course(req.body);
  try {
    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a course by ID (PUT request to '/courses/:id')
router.put('/courses/:id', getCourse, async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated course
    );
    if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a course by ID (DELETE request to '/courses/:id')
router.delete('/courses/:id', getCourse, async (req, res) => {
  try {
    await res.course.delete();
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
