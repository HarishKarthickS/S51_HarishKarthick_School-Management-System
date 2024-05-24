const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter'); // Assuming your model is in '../models/Newsletter'

router.get('/', async (req, res) => {
  try {
    const newsletters = await Newsletter.find().populate('author'); // Populate author details
    res.json(newsletters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post('/', async (req, res) => {
    const newsletter = new Newsletter(req.body);
    try {
      const savedNewsletter = await newsletter.save();
      res.status(201).json(savedNewsletter);
    } catch (err) {
      res.status(400).json({ message: err.message }); // Handle validation errors etc.
    }
  });
  
router.put('/:id', async (req, res) => {
    const { title, subtitle, content, category } = req.body; // Update specific fields
  
    try {
      const updatedNewsletter = await Newsletter.findByIdAndUpdate(
        req.params.id,
        { $set: { title, subtitle, content, category } },
        { new: true } // Return the updated document
      );
      if (!updatedNewsletter) {
        return res.status(404).json({ message: 'Newsletter not found' });
      }
      res.json(updatedNewsletter);
    } catch (err) {
      res.status(400).json({ message: err.message }); // Handle validation errors etc.
    }
  });
  
router.delete('/:id', async (req, res) => {
    try {
      const deletedNewsletter = await Newsletter.findByIdAndDelete(req.params.id);
      if (!deletedNewsletter) {
        return res.status(404).json({ message: 'Newsletter not found' });
      }
      res.json({ message: 'Newsletter deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
