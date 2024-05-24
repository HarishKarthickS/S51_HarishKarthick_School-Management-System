const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Main title of the newsletter
  subtitle: { type: String }, // Optional subtitle for additional info
  content: { type: String, required: true }, // Main content body of the newsletter
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }, // Reference to the user who created the newsletter
  category: { type: String }, // Category of the newsletter (e.g., tech, marketing)
  // Add an array to store sections within the newsletter (see next schema)
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sections' }],
  createdAt: { type: Date, default: Date.now },
  // Optional: Add a field for scheduled send time
  // sendAt: { type: Date },
});

module.exports = mongoose.model('Newsletters', NewsletterSchema);
