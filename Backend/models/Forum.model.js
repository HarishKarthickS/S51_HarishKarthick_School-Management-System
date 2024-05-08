

const mongoose = require('mongoose');

const ForumSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }, // Reference to the User who created the forum
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Forums', ForumSchema);
